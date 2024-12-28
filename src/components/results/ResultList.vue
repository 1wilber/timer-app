<script setup>
import ResultItem from './ResultItem.vue'

defineProps({
    results: []
})
</script>

<template>
    <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tiempo</th>
                </tr>
            </thead>
            <tbody>
                <ResultItem :key="result.id" v-for="result in results" :result="result" />
            </tbody>
        </table>
    </div>
</template>