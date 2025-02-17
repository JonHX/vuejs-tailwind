<script setup lang="ts">
    import { ref } from 'vue'
    const typedNumber: number = ref(0)
    const result: string = ref('')
    function calculateResult() {
        
    }
</script>

<template>
    <div>
      <input class="w-full p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-center" v-model="typedNumber" type="number" placeholder="" />
      {{ result }}
    </div>
</template>