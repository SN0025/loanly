<template>
    <div class="about-us-container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-4xl font-bold mb-6 text-gray-800">
                    About LoanLy
                </h2>
                <div class="space-y-4 text-gray-600">
                    <p>
                        LoanLy is a modern financial technology platform designed to simplify
                        the loan application process for individuals and businesses.
                    </p>
                    <p>
                        Our mission is to provide transparent, accessible, and efficient
                        loan services that empower our clients to achieve their financial goals.
                    </p>
                    <div class="pt-4">
                        <h3 class="text-2xl font-semibold mb-3 text-primary-600">
                            Our Values
                        </h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Transparency in financial services</li>
                            <li>Customer-centric approach</li>
                            <li>Advanced technological solutions</li>
                            <li>Fair and competitive loan options</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img src="../assets/banks-illustration.jpeg"
                     alt="About Us Illustration"
                     class="w-full rounded-lg shadow-lg" />
            </div>
        </div>

        <div class="mt-16 text-center">
            <h3 class="text-3xl font-bold mb-6 text-gray-800">
                Our Team
            </h3>
           

                <div class="grid md:grid-cols-1 gap-8">
                    <div v-for="member in teamMembers"
                         :key="member.name"
                         class="bg-white p-6 rounded-lg shadow-md">
                        <div class="text-center" >
                            <h4 class="text-xl font-semibold text-primary-600">
                                {{ member.name }}
                            </h4>
                            <p class="text-gray-500">{{ member.role }}</p>
                        </div>
                    </div>
                </div>
           
        </div>
    </div>
</template>

<script>export default {
        name: 'AboutUs',
        data() {
            return {
                teamMembers: [
                    { name: 'Slavik Nikolyan', role: 'CEO & Founder' }
                   
                ]
            }
        }
    }</script>