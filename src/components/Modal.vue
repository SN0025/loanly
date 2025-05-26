<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
         @keydown.esc="$emit('close')"
         tabindex="0">
        <div class="relative w-auto max-w-lg mx-auto my-6">
            <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-gray-300">
                    <h3 class="text-2xl font-semibold text-primary-600">
                        {{ title }}
                    </h3>
                    <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-gray-400 bg-transparent border-0 outline-none focus:outline-none hover:text-gray-600"
                            @click="$emit('close')">
                        ×
                    </button>
                </div>
                <div class="relative flex-auto p-6">
                    <p class="my-4 text-gray-600 text-lg leading-relaxed">
                        {{ description }}
                    </p>
                </div>
                <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-gray-300">
                    <Button label="Close"
                            @click="$emit('close')" />
                </div>
            </div>
        </div>
        <div class="fixed inset-0 z-40 bg-black opacity-25"
             @click="$emit('close')"></div>
    </div>
</template>

<script>export default {
    name: 'Modal',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    emits: ['close'],
    mounted() {
        // Add global event listener for escape key
        window.addEventListener('keydown', this.handleEscapeKey)

        // Prevent body scrolling
        document.body.style.overflow = 'hidden'
    },
    beforeUnmount() {
        // Remove event listener and restore body scrolling
        window.removeEventListener('keydown', this.handleEscapeKey)
        document.body.style.overflow = 'auto'
    },
    methods: {
        handleEscapeKey(event) {
            if (event.key === 'Escape') {
                this.$emit('close')
            }
        }
    }
}</script>