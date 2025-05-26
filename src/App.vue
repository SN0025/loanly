<template>
    <div id="app" class="min-h-screen bg-gray-50 font-sans">
        <MainLayout>
            <router-view v-slot="{ Component }">
                <transition name="fade"
                            mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </MainLayout>
    </div>
</template>

<script>import MainLayout from './layouts/MainLayout.vue'

    export default {
        name: 'App',
        components: {
            MainLayout
        }
    }</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>