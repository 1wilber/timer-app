<script setup lang="ts">
const { result } = defineProps<{ result: Result }>()
</script>

<template>
  <tr>
    <th>{{ result.ms }}</th>
    <td>{{ result.createdAt }}</td>
  </tr>
</template>
