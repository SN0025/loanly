<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div class="p-6">
            <h3 class="text-xl font-semibold text-primary-600 mb-2">
                {{ title }}
            </h3>
            <p class="text-gray-600">
                {{ description }}
            </p>
            <slot>
                <!-- Optional additional content -->
            </slot>
            <div v-if="actionLabel" class="mt-4">
                <BaseButton labelText="View" variant="outline" @click="$emit('action')" />
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
    name: 'Card',
    components: {
        BaseButton
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        actionLabel: {
            type: String,
            default: ''
        }
    },
    emits: ['action']
}</script>