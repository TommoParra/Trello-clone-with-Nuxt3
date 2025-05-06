<script setup>
import { useBoardStore } from '~/stores/boardStore';

const boardStore = useBoardStore()
</script>

<template>
   <main>
    <h1>{{ boardStore.board.name }}</h1>
    <div v-for="column in boardStore.board.columns" :key="column.name">
        <h2>{{ column.name }}</h2>
        <ul>
            <li v-for="task in column.tasks" :key="task.id">
                <strong>{{ task.name }}</strong>
                <p>{{ task.description }}</p>
            </li>
        </ul>
    </div>
   </main>
</template>