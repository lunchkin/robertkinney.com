<template>
	<NavigationBar />

	<router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		NavigationBar
	}
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
