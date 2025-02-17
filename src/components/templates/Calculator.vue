<script setup lang="ts">
    import { ref } from 'vue'
    import IntegerToRoman from '../organisms/IntegerToRoman.vue'
    import RomanToInteger from '../organisms/RomanToInteger.vue'
    import RomanNumeralsTable from '../molecules/RomanNumeralsTable.vue'
    const selectedOption = ref('RTI');
</script>

<template>
    <div class="w-full flex justify-center">
        <div class="w-full max-w-[1080px] flex space-x-4">
            <div class="w-12/12">
            <RomanNumeralsTable />
            </div>
            <div class="w-12/12 min-w-[400px]">
            <select v-model="selectedOption">
                <option value="RTI">Roman To Integer</option>
                <option value="ITR">Integer to Roman</option>
            </select>
            <div class="clear m-4">
                <RomanToInteger v-if="selectedOption === 'RTI'" />
                <IntegerToRoman v-if="selectedOption === 'ITR'" />
            </div>
            </div>
            <div class="w-12/12">
            <!-- Placeholder for third column -->
            <p>Future Content Here</p>
            </div>
        </div>
    </div>
</template>
