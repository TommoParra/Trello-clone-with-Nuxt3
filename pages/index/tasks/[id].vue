<script setup>
import { routerKey } from 'vue-router'
import { useBoardStore } from '~/stores/boardStore'

const boardStore = useBoardStore()
const route = useRoute()
const router = useRouter()

const task = computed(() => {
    return boardStore.getTask(route.params.id)
})

function deleteTask() {
    boardStore.deleteTask(route.params.id)
    router.push('/')
}

</script>

<template>
    <div class="task-wrapper">
        <div class="task-view">
            <section v-if="task">
                <UFormGroup class="task-detail-header" label="Name">
                    <UInput class="task-detail-header__input" type="text" v-model="task.name" />
                </UFormGroup>
                <UFormGroup class="task-detail-context" label="Description">
                    <UTextarea class="task-detail-context__input" v-model="task.description"></UTextarea>
                </UFormGroup>
                <UButton icon="i-heroicons-trash" color="error" @click="deleteTask">Delete Task</UButton>
            </section>
            <section v-else>
                <p>No task found.</p>
            </section>
        </div>
    </div>
</template>