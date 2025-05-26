<template>
    <div class="mb-4">
        <label v-if="labelText"
               class="block text-gray-700 text-sm font-bold mb-2">
            {{ labelText }}
        </label>
        <select :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <option v-for="option in options"
                    :key="option"
                    :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>export default {
        name: 'BaseSelect',
        props: {
            labelText: {
                type: String,
                default: ''
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            options: {
                type: Array,
                required: true
            }
        },
        emits: ['update:modelValue']
    }</script>