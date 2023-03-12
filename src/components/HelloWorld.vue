<template>
	<div class="hello">
		<h1>
			{{ msg }} {{ otherProp }}
		</h1>
	</div>
</template>

<script setup lang="ts">
interface Props {
	msg: string;
	otherProp?: string;
}

withDefaults(defineProps<Props>(), {
	otherProp: "Other Prop"
});
</script>

<style lang="scss" scoped>
.siteSection {
	background-color: #333333;
	color: #ffffff;
	padding: 20px;
}
</style>
