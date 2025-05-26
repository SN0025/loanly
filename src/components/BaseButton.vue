<template>
    <button :class="[
        'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
        variantClasses,
        { 'opacity-50 cursor-not-allowed': disabled }
    ]" :disabled="disabled" @click="$emit('click')">
        {{ labelText }}
    </button>
</template>

<script>export default {
    name: 'BaseButton',
    props: {
        labelText: { type: String, required: true },
        variant: {
            type: String,
            default: 'primary',
            validator: v => ['primary', 'secondary', 'outline'].includes(v)
        },
        disabled: { type: Boolean, default: false }
    },
    computed: {
        variantClasses() {
            switch (this.variant) {
                case 'primary':
                    return 'bg-green-600 text-white hover:bg-green-700'
                case 'secondary':
                    return 'bg-green-200 text-green-800 hover:bg-green-300'
                case 'outline':
                    return 'border border-green-600 text-white-600 hover:bg-green-50'
            }
        }
    }
}</script>