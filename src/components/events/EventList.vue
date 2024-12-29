<script setup>
import { useEventStore } from '@/stores/event';

const events = [{
  id: "333", name: "3x3"
},
{ id: "444", name: "4x4" }
]

const eventStore = useEventStore()


</script>
<template>
  <div class="events">
    <div @click="() => eventStore.change(event)" v-for="event in events" :key="event.id"
      :class="{ event: true, active: event.id === eventStore.currentEvent.id }">
      {{ event.name }}
    </div>
  </div>

</template>

<style scoped>
.events {
  display: grid;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0.5rem 1rem;
}

.events>.event {
  background-color: var(--bg-color);
  width: fit-content;
  color: var(--fg-color);
  padding: 1rem;
  cursor: pointer;
}

.events>.event:hover {
  filter: brightness(0.9);
}

.events>.event.active {
  background-color: var(--primary);
  color: var(--primary-invert);
}
</style>
