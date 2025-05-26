<template>
    <div class="mb-4">
        <label v-if="label"
               class="block text-sm font-medium text-gray-700 mb-2">
            {{ label }}
        </label>
        <input :type="type"
               :value="modelValue"
               @input="$emit('update:modelValue', $event.target.value)"
               :placeholder="placeholder"
               :required="required"
               class="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
    </div>
</template>

<script>export default {
        name: 'Input',
        props: {
            label: { type: String, default: '' },
            type: { type: String, default: 'text' },
            modelValue: { type: [String, Number], default: '' },
            placeholder: { type: String, default: '' },
            required: { type: Boolean, default: false }
        },
        emits: ['update:modelValue']
    }</script>