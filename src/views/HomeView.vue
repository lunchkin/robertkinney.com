<template>
	<div class="home">
		<img
			alt="Vue logo"
			src="../assets/logo.png"
		>
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

		<PageSection
			title="Section Title"
			:section="{ title: 'Section Title', body: 'Some Content' }"
		>
			<AboutMe />
		</PageSection>

		<PageSection
			title="Section Title"
			:section="{ title: 'Section Title', body: 'Some Content' }"

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

import HelloWorld from "@/components/HelloWorld.vue";
import PageSection from "@/components/PageSection.vue";
import AboutMe from "@/components/AboutMe.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		HelloWorld,
		PageSection,
		AboutMe
	}
});
</script>
