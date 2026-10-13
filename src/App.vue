<script setup>
import { ref } from 'vue'
import CustomInput from './components/CustomInput.vue'
import { refHistory } from './composables/refHistory.js'

const userInput = ref('')
const msg = ref('')
const checked = ref('bad')
const fruits = ref([])
const gender = ref()
const selected = ref([])
const customUserInput = ref('hello')
const titleInput = ref('titleInput')

const count = ref(0)
const userInput2 = ref('')

const { history: history2, undo: undo2 } = refHistory(userInput2)
</script>
<template>
	<h1>Composalable</h1>
	<p>count: {{ count }}</p>
	<button @click="count++">+1</button>
	<p>history: {{ history }}</p>
	<p><button @click="undo">pop</button></p>

	<p>count: {{ userInput2 }}</p>
	<input v-model="userInput2" type="text" />
	<p>history: {{ history2 }}</p>
	<p><button @click="undo2">pop</button></p>

	<h1>CustomInput</h1>
	<button @click="customUserInput = 'hello'">hello</button>
	<p>userCustomInput:{{ customUserInput }}</p>
	<CustomInput v-model.upperCase="customUserInput" v-model:title-name="titleInput" />

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
