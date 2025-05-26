<template>
  <div>
    <h2 class="text-4xl font-bold mb-8 text-center text-gray-800">
      Available Banks
    </h2>
    <div v-if="loading" class="text-center text-gray-600">
      Loading banks...
    </div>
    <div v-else-if="error" class="text-center text-red-600">
      {{ error }}
    </div>
    <div v-else class="grid md:grid-cols-3 gap-6">
      <BaseCard
        v-for="bank in banks"
        :key="bank._id"
        :actionLabel="'Learn More'"
        @action="showBankDetails(bank)"
      >
        <!-- Bank info with logo -->
        <div class="flex items-center mb-4">
          <!-- Circular logo container -->
          <div class="mr-4 flex-shrink-0">
            <div
              class="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center shadow-sm"
            >
              <img
              
              
                :src="`https://loanly-59855e6cf246.herokuapp.com/${bank.img_path}`"
                :alt="`${bank.bankName} logo`"
                class="w-12 h-12 object-contain p-1.5"
              />
            </div>
          </div>
          <!-- Bank name and info -->
          <div>
            <h3 class="text-xl font-bold text-gray-800">{{ bank.bankName }}</h3>
            <p class="text-sm text-gray-600">
              Minimum Score: {{ bank.minimumScore }} | Interest:
              {{ bank.percentage }}
            </p>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex justify-between text-sm text-gray-600">
            <span>Address: {{ bank.address }}</span>
          </div>
        </div>

        <!-- Mini Map - Made more visible with explicit dimensions and border -->
        <div class="mt-4 relative">
          <div class="h-48 border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
            <div 
              :id="`mini-map-${bank._id}`" 
              class="w-full h-full"
              style="min-height: 180px;"
            ></div>
          </div>
          <button
            @click.stop="openFullMap(bank)"
            class="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 focus:outline-none"
            title="Expand map"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
          </button>
        </div>
      </BaseCard>
    </div>

    <!-- Bank Details Modal -->
    <Modal
      v-if="selectedBank"
      :title="selectedBank.bankName"
      :description="getBankDetailsDescription(selectedBank)"
      @close="selectedBank = null"
    >
      <!-- Add logo to modal -->
      <div class="flex justify-center mb-4">
        <div
          class="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center shadow-md"
        >
          <img
          
          
            :src="`https://loanly-59855e6cf246.herokuapp.com/${selectedBank.img_path}`"
            :alt="`${selectedBank.bankName} logo`"
            class="w-20 h-20 object-contain"
            @error="handleImageError($event, selectedBank)"
          />
        </div>
      </div>
    </Modal>

    <!-- Full Map Modal -->
    <div
      v-if="showFullMap"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 w-11/12 max-w-4xl mx-auto max-h-[90vh] flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-gray-800">
            {{ currentMapBank ? currentMapBank.bankName : "" }} Branches
          </h3>
          <button
            @click="closeFullMap"
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 min-h-[400px]" id="full-map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseCard from "@/components/BaseCard.vue";
import Modal from "@/components/Modal.vue";
import BranchesManager from "@/utils/BranchesManager";
export default {
  components: {
    BaseCard,
    Modal,
  },
  data() {
    return {
      selectedBank: null,
      banks: [],
      loading: true,
      error: null,
      defaultLogoPath: "/default-bank-logo.png",
      showFullMap: false,
      currentMapBank: null,
      maps: {},
      markers: {},
      fullMap: null,
      googleMapsReady: false,
      branchesManager: new BranchesManager(),
    };
  },
  async mounted() {
    // Load cached geocoding data
    this.branchesManager.loadCache();
    
    await this.fetchBanks();
    await this.loadBranchData();
    
    this.loadGoogleMapsScript();
  },
  beforeDestroy() {
    // Save cache when component is destroyed
    this.branchesManager.saveCache();
  },
  methods: {
    async fetchBanks() {
      try {
        const response =  await axios.get('https://loanly-59855e6cf246.herokuapp.com/banks');
        
        this.banks = response.data;
        this.loading = false;
      } catch (error) {
        this.error = "Failed to fetch banks. Please try again later.";
        this.loading = false;
        console.error("Error fetching banks:", error);
      }
    },
    
    async loadBranchData() {
      // For each bank, load branch data from CSV files
      for (const bank of this.banks) {
        try {
          // Assuming bank.id matches the CSV filename prefix
          //`http://localhost:3000/branches/${bank._id}_branches.csv`
          const csvResponse = await axios.get(`https://loanly-59855e6cf33246.herokuapp.com/branches/${bank._id}_branches.csv`);
          
          // Parse CSV data
          const branchData = BranchesManager.parseCSV(csvResponse.data);
          
          // Load branch data into manager
          this.branchesManager.loadBranchData(bank._id, branchData);
          
          // Get branches with geocoding (limited to 3-5 random branches)
          const randomCount = Math.floor(Math.random() * 3) + 3; // 3-5 branches
          bank.branches = await this.branchesManager.getBranches(bank._id, true, randomCount);
          
         bank.branches = (bank.branches || []).map(branch => ({
        ...branch,
        lat: typeof branch.lat === 'string' ? parseFloat(branch.lat) : branch.lat,
        lng: typeof branch.lng === 'string' ? parseFloat(branch.lng) : branch.lng
      })).filter(branch => 
        !isNaN(branch.lat) && !isNaN(branch.lng)
      );
      
    } catch (error) {
      console.error(`Error processing branches for ${bank._id}:`, error);
      bank.branches = this.generateDefaultBranches(10, 15);
    }
  }
  
  if (this.googleMapsReady) {
    this.initializeAllMiniMaps();
  }
  },
    
    generateDefaultBranches(min, max) {
      // Your existing generateRandomBranches function as fallback
      const count = Math.floor(Math.random() * (max - min + 1)) + min;
      const branches = [];
      
      // Base coordinates - Approximately for Yerevan, Armenia
      const baseLocation = {
        lat: 40.179,
        lng: 44.499
      };
      
      for (let i = 0; i < count; i++) {
        const branch = {
          id: `branch-${i}`,
          name: `Branch ${i + 1}`,
          lat: baseLocation.lat + (Math.random() - 0.5) * 0.05,
          lng: baseLocation.lng + (Math.random() - 0.5) * 0.05,
          address: `Random Street ${Math.floor(Math.random() * 100) + 1}, Yerevan`
        };
        branches.push(branch);
      }
      
      return branches;
    },
    
    loadGoogleMapsScript() {
      if (!window.google || !window.google.maps) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC_4RSoqhKRlU-DwYe_KMXo38AtQamMs2k&callback=initVueAppMaps`;
        script.async = true;
        script.defer = true;
        window.initVueAppMaps = () => {
          this.googleMapsReady = true;
          if (this.banks.length > 0) {
            this.initializeAllMiniMaps();
          }
        };
        document.head.appendChild(script);
      } else {
        this.googleMapsReady = true;
        this.initializeAllMiniMaps();
      }
    },


    initializeAllMiniMaps() {
      if (!this.googleMapsReady || !this.banks.length) return;
      
      // Wait for next tick to ensure DOM is updated
      this.$nextTick(() => {
      console.log(this.banks)
        this.banks.forEach(bank => {
          // Skip if already initialized
          console.log(this.maps)

          // if (this.maps[bank.id]) return;
          this.initializeMiniMap(bank);
        });
      });
    },
    
    initializeMiniMap(bank) {
  const mapElement = document.getElementById(`mini-map-${bank._id}`);
  if (!mapElement) {
    console.error(`Map container not found for bank ${bank._id}`);
    return;
  }

  // Clear previous map
  mapElement.innerHTML = '';

  // Validate and normalize branches data
  const validBranches = (bank.branches || []).map(branch => {
    // Convert string numbers to floats if needed
    const lat = typeof branch.lat === 'string' ? parseFloat(branch.lat) : branch.lat;
    const lng = typeof branch.lng === 'string' ? parseFloat(branch.lng) : branch.lng;
    
    return {
      ...branch,
      lat: !isNaN(lat) && Math.abs(lat) <= 90 ? lat : 40.1792, // Fallback to Yerevan
      lng: !isNaN(lng) && Math.abs(lng) <= 180 ? lng : 44.4991
    };
  }).filter(branch => branch.lat && branch.lng);

  // Create map with default Yerevan center if no valid branches
  const defaultCenter = { lat: 40.1792, lng: 44.4991 };
  const map = new google.maps.Map(mapElement, {
    zoom: 12,
    center: validBranches.length > 0 ? 
      { lat: validBranches[0].lat, lng: validBranches[0].lng } : 
      defaultCenter,
    disableDefaultUI: true
  });

  // Add markers for valid branches
  validBranches.forEach(branch => {
    new google.maps.Marker({
      position: { lat: branch.lat, lng: branch.lng },
      map,
      title: branch.name || branch.address,
      icon: {
        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        scaledSize: new google.maps.Size(20, 20)
      }
    });
  });

  // Fit bounds if multiple branches
  if (validBranches.length > 1) {
    const bounds = new google.maps.LatLngBounds();
    validBranches.forEach(branch => {
      bounds.extend(new google.maps.LatLng(branch.lat, branch.lng));
    });
    map.fitBounds(bounds, 20);
  }

  this.maps[bank._id] = map;
},
    
    openFullMap(bank) {
  this.currentMapBank = bank;
  this.showFullMap = true;

  this.$nextTick(() => {
    const mapElement = document.getElementById("full-map");
    if (!mapElement || !window.google) return;

    // Validate branches data
    const validBranches = (bank.branches || []).filter(branch => 
      branch.lat && branch.lng && 
      !isNaN(branch.lat) && !isNaN(branch.lng)
    );

    this.fullMap = new google.maps.Map(mapElement, {
      zoom: 13,
      center: validBranches.length > 0 ? 
        { lat: validBranches[0].lat, lng: validBranches[0].lng } : 
        { lat: 40.1792, lng: 44.4991 }
    });
        
        // Add markers for each branch
        const infoWindow = new google.maps.InfoWindow();
        
        bank.branches.forEach(branch => {
          const marker = new google.maps.Marker({
            position: { lat: branch.lat, lng: branch.lng },
            map: this.fullMap,
            title: branch.name,
            animation: google.maps.Animation.DROP
          });
          
          // Add click event to show info window
          marker.addListener("click", () => {
            infoWindow.setContent(`
              <div>
                <h3 style="font-weight: bold; margin-bottom: 5px;">${branch.name}</h3>
                <p>${branch.address}</p>
              </div>
            `);
            infoWindow.open(this.fullMap, marker);
          });
        });
        
        // Fit map to show all markers with padding
        this.fullMap.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
      });
    },
    
    closeFullMap() {
      this.showFullMap = false;
      this.fullMap = null;
      this.currentMapBank = null;
    },
    
    showBankDetails(bank) {
      this.selectedBank = bank;
    },
    
    getBankDetailsDescription(bank) {
      return `
        Bank Name: ${bank.bankName}
        Minimum Credit Score: ${bank.minimumScore}
        Interest Rate: ${bank.percentage}%
        Address: ${bank.address}
        Number of Branches: ${bank.branches ? bank.branches.length : 0}
      `;
    },
    
    handleImageError(event, bank) {
      event.target.src = this.defaultLogoPath;
      console.warn(`Failed to load logo for ${bank.bankName}`);
    }
  }
};
</script>

<style scoped>
.mini-map-container {
  position: relative;
  height: 180px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

[id^="mini-map-"] {
  height: 100%;
  width: 100%;
  display: block;
}

/* Add transition for smooth loading */
.map-fade-enter-active, .map-fade-leave-active {
  transition: opacity 0.5s;
}
.map-fade-enter, .map-fade-leave-to {
  opacity: 0;
}

/* Card hover effects */
.rounded-full {
  transition: all 0.3s ease;
}

.rounded-full:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Full map modal animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fixed {
  animation: fadeIn 0.3s ease-out;
}

/* Ensure map containers are visible during loading */
.gm-style {
  background-color: transparent !important;
}


</style>