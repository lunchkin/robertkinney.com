<template>
	<div class="hello">
		<h1>
			{{ props.msg }}
		</h1>
	</div>
</template>

<script setup lang="ts">
// import PageSection from "@/components/PageSection.vue";

const props = defineProps<{
	msg: string;
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
