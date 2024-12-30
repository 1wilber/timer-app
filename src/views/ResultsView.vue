<script setup>
import { useResultStore } from '@/stores/result';
import ResultList from '@/components/results/ResultList.vue'
import EventList from '@/components/events/EventList.vue';

const resultStore = useResultStore()

</script>

<template>
  <div class="timer">
    <EventList />
    <header>
      <h2>L F' R' U2 F U R' B L' B2 U F2 R2 U2 F2 B2 L2 U' D' F</h2>
    </header>
    <section tabindex="0" @keydown.space="resultStore.stop" @keyup.space="resultStore.start">
      <h2 class="">{{ resultStore.currentTimeMs }}</h2>
    </section>
    <footer>
      <ResultList :results="results" />
    </footer>
  </div>
</template>
