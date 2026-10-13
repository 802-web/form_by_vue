import { ref, watchEffect } from 'vue'

export const refHistory = (source) => {
	const history = ref([])
	watchEffect(() => {
		history.value.push(source.value)
	})
	const undo = () => {
		history.value.pop()
		source.value = history.value.pop()
	}
	return { history, undo }
}
