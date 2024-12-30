<script setup>
import { useResultStore } from '@/stores/result';
const resultStore = useResultStore()

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
        <tr :key="result.id" v-for="(result, index) in resultStore.results" :result="result">
          <td>{{ index + 1 }}</td>
          <th>{{ result.ms }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
