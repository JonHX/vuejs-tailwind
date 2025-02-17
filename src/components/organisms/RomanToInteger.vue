<script setup lang="ts">
    import { ref, watch } from 'vue'
    import romanToInt from '../../utilities/romanToInt.ts'
    const inputString: string = ref('V')
    const result: string = ref(50)
    function calculateResult() {
        result.value = romanToInt(inputString.value.toUpperCase())
    }

    watch(inputString, calculateResult)
</script>

<template>
    <div>
      <input class="w-full p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-center" v-model="inputString" type="text" placeholder="" />
      <p className="text-2xl font-semibold text-gray-900 bg-gray-100 p-4 rounded-lg shadow-md mt-10">Result: {{ result }}</p>
    </div>
</template>