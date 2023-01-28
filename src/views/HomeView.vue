<template>
	<div class="home">
		<img
			alt="Vue logo"
			src="../assets/logo.png"
		>
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

		<PageSection
			title="Section Title"
			class="meGreen"
		>
			<h3>
				Some Content
			</h3>
		</PageSection>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PageSection from "@/components/PageSection.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		HelloWorld,
		PageSection
	}
});
</script>

<style lang="scss" scoped>
.meGreen {
	background-color: #42b983;
}
</style>
