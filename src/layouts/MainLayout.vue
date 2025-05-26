<template>
    <div class="flex flex-col min-h-screen">
        <header class="bg-white shadow-md">
            <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                <div class="flex items-center">
                    <!--<img src="../assets/logo.svg" alt="Loan App Logo" class="h-10 mr-4">-->
                    <h1 class="text-2xl font-bold text-primary-600">LoanLy</h1>
                </div>
                <div class="space-x-6">
                    <router-link v-for="link in navLinks"
                                 :key="link.name"
                                 :to="link.path"
                                 class="text-gray-700 hover:text-primary-600 transition-colors">
                        {{ link.name }}
                    </router-link>
                </div>
            </nav>
        </header>

        <main class="flex-grow container mx-auto px-4 py-8">
            <slot />
        </main>

        <ChatbotInterface />

        <footer class="bg-white shadow-t py-6">
            <div class="container mx-auto text-center text-gray-600">
                © 2025 LoanLy. All Rights Reserved.
            </div>
        </footer>



    </div>
</template>

<script>
import ChatbotInterface from '../views/ChatbotInterface.vue';


export default {
        name: 'MainLayout',

        data() {
            return {
                navLinks: [
                    { name: 'Calculator', path: '/calculator' },
                    { name: 'Banks', path: '/banks' },
                    { name: 'About', path: '/about' },
                    { name: 'Apply', path: '/apply' }
                ]
            }
        },

        components: {
            ChatbotInterface
        }
    }
</script>