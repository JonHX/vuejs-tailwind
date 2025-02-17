<script setup lang="ts">
    import { ref } from 'vue'
    import IntegerToRoman from '../organisms/IntegerToRoman.vue'
    import RomanToInteger from '../organisms/RomanToInteger.vue'
    const selectedOption = ref('RTI');
</script>

<template>
    <select v-model="selectedOption">
        <option value="RTI">Roman To Integer</option>
        <option value="ITR">Integer to Roman</option>
    </select>
    <div class="clear m-4">
        <RomanToInteger v-if="selectedOption === 'RTI'"/>
        <IntegerToRoman v-if="selectedOption === 'ITR'"/>
    </div>
</template>
