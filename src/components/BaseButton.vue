<template>
  <button :class="['button', type]" @click="$emit('clicked')">
    <slot />
  </button>
</template>

<script>
export default {
	name: 'base-button',
	props: {
		type: {
			type: String,
			required: false,
			validator: value => {
        return value.match(/(primary|warning|error)/)
      },
		}
	}
}
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 6px 10px;
	margin: 10px;
}
button.primary {
	background: #0074D9;
	border-color: #001f3f;
	color: white;
}
button.warning {
	background: #FF851B;
	border: none;
}
button.error {
	background: #FF4136;
	color: white;
	border: none;
}
</style>
