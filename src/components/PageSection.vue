<template>
	<div class="siteSection meGreen">
		<h2
			v-if="props.title"
			class="sectionTitle"
		>
			{{ props.title }}
			{{ props.section.title }}
		</h2>
		<div class="sectionContent">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { HomeSection } from "@/types/HomeSection";

const props = defineProps<{
	title: string;
	section: HomeSection;
}>();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.siteSection {
	background-color: #333333;
	color: #ffffff;
	padding: 20px;
}

.meGreen {
	background-color: $secondary;
}
</style>
