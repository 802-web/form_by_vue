<script setup>
import { ref } from 'vue'

const userInput = ref('')
const msg = ref('')
const checked = ref('bad')
const fruits = ref([])
const gender = ref()
const selected = ref([])
</script>

<template>
	<h1>v-model</h1>
	<h2>text</h2>
	<input v-model.lazy.number="userInput" type="text" />
	<p>{{ typeof userInput }}</p>

	<h2>text area</h2>
	<textarea v-model.trim="msg" type="textarea" />
	<p style="white-space: pre">{{ msg }}</p>

	<h2>checkbox</h2>
	<input id="chkBox" v-model="checked" type="checkbox" true-value="good" false-value="bad" />
	<label for="chkBox">{{ checked }}</label>

	<input id="Apple" v-model="fruits" type="checkbox" value="Apple" />
	<label for="Apple">Apple</label>
	<input id="banana" v-model="fruits" type="checkbox" value="banana" />
	<label for="banana">banana</label>
	<input id="grape" v-model="fruits" type="checkbox" value="grape" />
	<label for="grape">grape</label>
	<p>{{ fruits }}</p>

	<h2>radio</h2>
	<input id="male" v-model="gender" type="radio" value="male" />
	<label for="male">male</label>
	<input id="female" v-model="gender" type="radio" value="female" />
	<label for="female">female</label>
	<p>{{ gender }}</p>

	<h2>select</h2>
	<select v-model="selected" multiple>
		<option value="" disabled>select one</option>
		<option v-for="option in ['a', 'b', 'c']" :key="option">{{ option }}</option>
	</select>
	<p>{{ selected }}</p>
</template>

<style scoped></style>
