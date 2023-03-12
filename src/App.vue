<template>
	<NavigationBar />

	<router-view />

	<SiteFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		NavigationBar,
		SiteFooter
	}
});
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $primary;
}
</style>
