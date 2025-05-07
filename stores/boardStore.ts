import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"
import boardData from '~/data/board.json'


export const useBoardStore = defineStore('boardStore', () => {
    const board = useStorage('board', boardData)

    const getTask = computed(() => {
        return taskId => {
            for(const column of board.value.columns) {
                const task = column.tasks.find(task => task.id === taskId)
                if(task) return task
            }
        }
    })

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
        deleteColumn
    }
})