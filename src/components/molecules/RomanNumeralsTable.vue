<script setup lang="ts">
    import RomanNumerals from '../../config/romanNumerals.ts'
</script>

<template>
    <div class="relative">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Numeral
                </th>
                <th scope="col" class="px-6 py-3">
                    Value
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="numeral in RomanNumerals" :key="numeral" 
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ numeral.numeral }}
                </th>
                <td class="px-6 py-4">
                    {{ numeral.value }}
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>