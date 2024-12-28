<script setup>
const { result } = defineProps({
    result: { type: Object },
})
</script>

<template>
    <tr>
        <th>{{ result.id }}</th>
        <td>{{ result.time }}</td>
    </tr>
</template>