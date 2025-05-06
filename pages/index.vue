<script setup>
import { UCard, UContainer } from '#components';
import { useBoardStore } from '~/stores/boardStore';

const boardStore = useBoardStore()
</script>

<template>
   <div class="board-wrapper">
    <main class="board">
        <UContainer class="column" v-for="column in boardStore.board.columns" :key="column.name">
            <h2 class="mb-4">{{ column.name }}</h2>
            <ul>
                <li v-for="task in column.tasks" :key="task.id">
                   <UCard class="mb-4">
                    <strong>{{ task.name }}</strong>
                    <p>{{ task.description }}</p>
                   </UCard>
                </li>
            </ul>
        </UContainer>
        <UContainer>
            <input type="text" placeholder="+ Create new column">
        </UContainer>
       </main>
   </div>
</template>