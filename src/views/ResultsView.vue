<script setup>
import { useResultStore } from '@/stores/result';
import ResultList from '@/components/results/ResultList.vue'
import EventList from '@/components/events/EventList.vue';

const resultStore = useResultStore()

</script>

<template>
  <aside>
    <ResultList />
  </aside>
  <div class="timer container-fluid">
    <EventList />
    <header>
      <h2>{{ resultStore.currentScramble }}</h2>
    </header>
    <section tabindex="0" @keydown.space="resultStore.stop" @keyup.space="resultStore.start">
      <h2 class="">{{ resultStore.currentTimeMs }}</h2>
    </section>
  </div>
</template>
