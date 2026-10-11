<script setup>
import { ref } from 'vue'

const userInput = ref('')
const msg = ref('')
</script>

<template>
	<h1>v-model</h1>
	<h2>text</h2>
	<input
		v-model="userInput"
		type="text"
	/>
	<p>{{ userInput }}</p>

	<h2>text area</h2>
	<textarea
		v-model="msg"
		type="textarea"
	/>
	<p style="white-space: pre">{{ msg }}</p>
</template>

<style scoped></style>
