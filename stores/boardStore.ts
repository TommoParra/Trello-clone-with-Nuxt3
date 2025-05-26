import { v4 as uuid } from "uuid"
import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"
import boardData from '~/data/board.json'


export const useBoardStore = defineStore('boardStore', () => {
    const board = useStorage('board', boardData)

    /**
     * Tasks
     */
    const getTask = computed(() => {
        return taskId => {
            for (const column of board.value.columns) {
                const task = column.tasks.find(task => task.id === taskId)
                if (task) return task
            }
        }
    })

    function addTask(columnIndex, taskName) {
        board.value.columns[columnIndex].tasks.push({
            id: uuid(),
            name: taskName,
            description: ''
        })
    }

    function deleteTask(taskId) {
        for(const column of board.value.columns) {
            const taskIndex = column.tasks.findIndex(task => task.id === taskId)

            if(taskIndex !== -1) {
                column.tasks.splice(taskIndex, 1)
                return
            }
        }
    }

    function moveTask({ taskIndex, fromColumnIndex, toColumnIndex }) {
        const task = board.value.columns[fromColumnIndex].tasks.splice(
            taskIndex,
            1
        )[0]

        board.value.columns[toColumnIndex].tasks.push(task)
    }

    function moveColumn({fromColumnIndex, toColumnIndex}) {
        const column = board.value.columns.splice(fromColumnIndex, 1)[0]
        board.value.columns.splice(toColumnIndex, 0, column)
    }

    /**
     * Columns
    */
    function addColumn(columnName: string) {
        board.value.columns.push({
            name: columnName,
            tasks: [],
            id: ""
        })
    }

    function deleteColumn(columnIndex: number) {
        board.value.columns.splice(columnIndex, 1)
    }

    return {
        /* state */
        board,
        /* getters */
        getTask,
        /* actions */
        addColumn,
        addTask,
        deleteColumn,
        deleteTask,
        moveColumn,
        moveTask
    }
})