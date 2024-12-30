<script setup>
import { useEventStore } from '@/stores/event';

const events = [{
  id: "333", name: "3x3"
},
{ id: "444", name: "4x4" }
]

const { currentEvent, setCurrentEvent } = useEventStore()

const handleChange = (event) => {
  const { value } = event.target
  setCurrentEvent(value)
}

</script>

<template>
  <select name="currentEvent" @change="handleChange">
    <option :key="event.id" :value="event.id" :selected="currentEvent.id === event.id" v-for="event in events">
      {{ event.name }}
    </option>
  </select>
</template>
