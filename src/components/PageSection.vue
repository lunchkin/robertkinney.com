<template>
	<div class="siteSection">
		<h2
			v-if="props.title"
			class="sectionTitle"
		>
			{{ props.title }}
		</h2>
		<div class="sectionContent">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">

const props = defineProps<{
	title?: string;
}>();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.siteSection {
	background-color: #333333;
	color: #ffffff;
	padding: 20px;
}
</style>
