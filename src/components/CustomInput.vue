<script setup>
const [model, modifiers] = defineModel({
	type: String,
	set(value) {
		if (modifiers.upperCase) {
			return value.toUpperCase()
		}
		return value
	},
})
const titleModel = defineModel('titleName', {
	type: String,
})
model.value
</script>

<template>
	<h2>CustomInput</h2>
	<h3>{{ titleModel }}</h3>
	<button @click="model = 'hi'">hi</button>
	<p>model: {{ model }}</p>
	<h3>v-model text</h3>
	<input v-model="model" type="text" />
	<p>modifiers: {{ modifiers }}</p>
	<p>titleModel: {{ titleModel }}</p>
	<input v-model="titleModel" type="text" />
</template>
