<script setup>
import { useResultStore } from '@/stores/result';
import ResultList from '@/components/results/ResultList.vue'
import EventList from '@/components/events/EventList.vue';

const { results } = useResultStore()

const start = () => {
  console.log('timer:started')
}

</script>
<template>
  <div class="timer">
    <div class="timer-header">
      <h2>L F' R' U2 F U R' B L' B2 U F2 R2 U2 F2 B2 L2 U' D' F</h2>
    </div>
    <div class="timer-body" tabindex="0" @keyup.space="start">
      <h2 class="">0.00</h2>
    </div>
    <div class="timer-footer">
      <ResultList :results="results" />
    </div>
    <EventList />
  </div>
</template>
