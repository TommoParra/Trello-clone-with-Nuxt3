<script setup>
import { useBoardStore } from '~/stores/boardStore';

defineProps({
    column: {
        type: Object,
        required: true,
    },
    columnIndex: {
        type: Number,
        required: true
    }
})

const boardStore = useBoardStore()
const router = useRouter()

const editNameState = ref(false)

function deleteColumn(columnIndex) {
    boardStore.deleteColumn(columnIndex)
}

function goToTask(taskId) {
    router.push(`/tasks/${taskId}`)
}

</script>


<template>
    <UContainer class="column">
            <div class="column-header">
                <div>
                    <UInput v-if="editNameState" type="text" v-model="column.name"/>
                    <h2 v-else class="mb-4">{{ column.name }}</h2>
                </div>
                <div>
                    <UButton 
                    icon="i-heroicons-pencil-square"
                    class="mr-2"
                    @click="editNameState = !editNameState"
                    />
                    <UButton
                    icon="i-heroicons-trash"
                    color="error"
                    @click="deleteColumn(columnIndex)"
                    />
                </div>
            </div>
            <ul>
                <li v-for="task in column.tasks" :key="task.id">
                   <UCard
                   class="mb-4"
                   @click="goToTask(task.id)"
                   >
                    <strong>{{ task.name }}</strong>
                    <p>{{ task.description }}</p>
                   </UCard>
                </li>
            </ul>
        </UContainer>
</template>