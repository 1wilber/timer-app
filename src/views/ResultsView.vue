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
      <h2>{{ resultStore.currentScramble }}</h2>
    </header>
    <section tabindex="0" @keydown.space="resultStore.stop" @keyup.space="resultStore.start">
      <h2 class="">{{ resultStore.currentTimeMs }}</h2>
    </section>
    <footer>
      <ResultList />
    </footer>
  </div>
</template>
