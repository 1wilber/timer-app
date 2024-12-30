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
  <select name="currentEvent" @change="() => eventStore.change(event)">
    <option :selected="eventStore.currentEvent.id === event.id" v-for="event in events" :key="event.id" >{{event.name}}</option>
  </select>
</template>
