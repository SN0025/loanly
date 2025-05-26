// BranchesManager.js
export default class BranchesManager {
  constructor() {
    // Cache for storing geocoded results
    this.geocodeCache = {};
    // Store loaded branch data by bank
    this.bankBranches = {};
  }

  /**
   * Load branch data from CSV for a specific bank
   * @param {string} bankId - Unique identifier for the bank
   * @param {Array} csvData - Array of branch objects with name, address and id
   */
  loadBranchData(bankId, csvData) {
    if (!this.bankBranches[bankId]) {
      this.bankBranches[bankId] = csvData.map(branch => ({
        id: branch.ID,
        name: branch.Name,
        address: branch.Address,
        lat: null,
        lng: null
      }));
    }
    return this.bankBranches[bankId];
  }

  /**
   * Get branches for a specific bank, with geocoding if needed
   * @param {string} bankId - Bank identifier
   * @param {boolean} geocode - Whether to geocode addresses that don't have coordinates
   * @param {number} limit - Maximum number of branches to return (null for all)
   * @returns {Promise<Array>} - Array of branch objects with coordinates
   */
  async getBranches(bankId, geocode = true, limit = null) {
    if (!this.bankBranches[bankId]) {
      throw new Error(`No branch data loaded for bank: ${bankId}`);
    }

    let branches = [...this.bankBranches[bankId]];
    
    // If limit is specified and less than total branches, pick random subset
    if (limit && limit < branches.length) {
      branches = this.getRandomSubset(branches, limit);
    }
    
    // Geocode addresses if needed
    if (geocode) {
      for (const branch of branches) {
        if (branch.lat === null || branch.lng === null) {
          try {
            const coords = await this.geocodeAddress(branch.address);
            branch.lat = coords.lat;
            branch.lng = coords.lng;
            
            // Update the stored data
            const originalBranch = this.bankBranches[bankId].find(b => b.id === branch.id);
            if (originalBranch) {
              originalBranch.lat = coords.lat;
              originalBranch.lng = coords.lng;
            }
          } catch (error) {
            console.error(`Failed to geocode address for ${branch.name}:`, error);
          }
        }
      }
    }
    
    return branches;
  }

  /**
   * Get random subset of branches
   * @param {Array} branches - Array of branch objects
   * @param {number} count - Number of branches to return
   * @returns {Array} - Random subset of branches
   */
  getRandomSubset(branches, count) {
    const shuffled = [...branches].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  /**
   * Geocode an address to get coordinates
   * @param {string} address - Address to geocode
   * @returns {Promise<Object>} - Object with lat and lng properties
   */
  geocodeAddress(address) {
    // Check cache first
    if (this.geocodeCache[address]) {
      return Promise.resolve(this.geocodeCache[address]);
    }
    
    return new Promise((resolve, reject) => {
      // Make sure Google Maps API is loaded
      if (!window.google || !window.google.maps) {
        reject(new Error('Google Maps API not loaded'));
        return;
      }
      
      const geocoder = new google.maps.Geocoder();
      
      // Add ", Armenia" to address if not already included for better results
      const fullAddress = address.toLowerCase().includes('armenia') ? 
        address : `${address}, Armenia`;
      
      geocoder.geocode({ 'address': fullAddress }, (results, status) => {
        if (status === 'OK') {
          const location = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          
          // Cache the result
          this.geocodeCache[address] = location;
          
          resolve(location);
        } else {
          // Add delay and retry for rate limit issues
          if (status === 'OVER_QUERY_LIMIT') {
            setTimeout(() => {
              this.geocodeAddress(address)
                .then(resolve)
                .catch(reject);
            }, 2000);
          } else {
            reject(new Error(`Geocoding failed: ${status}`));
          }
        }
      });
    });
  }

  /**
   * Parse CSV string into array of objects
   * @param {string} csvString - CSV data as string
   * @returns {Array} - Array of objects with properties from CSV headers
   */
  static parseCSV(csvString) {
    const lines = csvString.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim());
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index].replace(/^"|"$/g, ''); // Remove quotes if present
        return obj;
      }, {});
    });
  }

  /**
   * Save geocoded data to localStorage to avoid repeated API calls
   */
  saveCache() {
    try {
      localStorage.setItem('geocodeCache', JSON.stringify(this.geocodeCache));
    } catch (e) {
      console.warn('Failed to save geocode cache to localStorage', e);
    }
  }

  /**
   * Load geocoded data from localStorage
   */
  loadCache() {
    try {
      const cached = localStorage.getItem('geocodeCache');
      if (cached) {
        this.geocodeCache = JSON.parse(cached);
      }
    } catch (e) {
      console.warn('Failed to load geocode cache from localStorage', e);
    }
  }
}