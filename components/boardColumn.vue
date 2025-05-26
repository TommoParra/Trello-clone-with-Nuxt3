<script setup>
import { useBoardStore } from '~/stores/boardStore';

const props = defineProps({
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
const newTaskName = ref('')

function addTask() {
    console.log('Adding:', newTaskName.value)
    boardStore.addTask(props.columnIndex, newTaskName.value)
    newTaskName.value = ''
}

function deleteColumn(columnIndex) {
    boardStore.deleteColumn(columnIndex)
}

function dropItem(event, { toColumnIndex, toTaskIndex }) {
   const type = event.dataTransfer.getData('type')
   const fromColumnIndex = event.dataTransfer.getData('from-column-index')
   
   if(type === 'task') {
    const fromTaskIndex = event.dataTransfer.getData('from-task-index')
    
    boardStore.moveTask({
        fromTaskIndex,
        toTaskIndex,
        fromColumnIndex,
        toColumnIndex
    })
   } else if (type === 'column') {
    boardStore.moveColumn({
        fromColumnIndex,
        toColumnIndex
    }) 
   }
}

function goToTask(taskId) {
    router.push(`/tasks/${taskId}`)
}

function pickUpColumn(event, fromColumnIndex) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.setData('type', 'column')
    event.dataTransfer.setData('from-column-index', fromColumnIndex)
}

function pickupTask(event, {fromColumnIndex, fromTaskIndex}) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.setData('type', 'task')
    event.dataTransfer.setData('from-column-index', fromColumnIndex)
    event.dataTransfer.setData('from-task-index', fromTaskIndex)
}

</script>


<template>
    <UContainer
        class="column"
        draggable="true"
        @dragstart.self="pickUpColumn($event, columnIndex)"
        @dragenter.prevent
        @dragover.prevent
        @drop.stop="dropItem($event, { toColumnIndex: columnIndex })"
    >
        <div class="column-header">
            <div>
                <UInput
                    v-if="editNameState"
                    type="text"
                    v-model="column.name"
                />
                <h2 v-else class="mb-4">{{ column.name }}</h2>
            </div>
            <div>
                <UButton
                    icon="i-heroicons-pencil-square"
                    class="mr-2" @click="editNameState = !editNameState"
                />
                <UButton
                    icon="i-heroicons-trash"
                    color="error"
                    @click="deleteColumn(columnIndex)"
                />
            </div>
        </div>
        <ul>
            <li
                v-for="(task, taskIndex) in column.tasks"
                :key="task.id"
            >
                <UCard
                    class="mb-4"
                    @click="goToTask(task.id)"
                    draggable="true"
                    @dragstart="pickupTask($event, {
                        fromColumnIndex: columnIndex,
                        fromTaskIndex: taskIndex
                    })
                    "

                    @drop.stop="
                        dropItem(
                            $event, {
                                toColumnIndex: columnIndex,
                                toTaskIndex: taskIndex
                        })
                    "
                >
                    <strong>{{ task.name }}</strong>
                    <p>{{ task.description }}</p>
                </UCard>
            </li>
        </ul>
        <UInput
            v-model="newTaskName"
            type="text"
            placeholder="Create new task"
            icon="i-heroicons-plus-circle-solid"
            @keyup.enter="addTask"
        />
    </UContainer>
</template>