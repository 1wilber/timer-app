<script setup>
import { useResultStore } from '@/stores/result';
import ResultItem from './ResultItem.vue'

const resultStore = useResultStore()

</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Tiempo</th>
        </tr>
      </thead>
      <tbody>
        <ResultItem :key="result.id" v-for="result in resultStore.results" :result="result" />
      </tbody>
    </table>
  </div>
</template>
