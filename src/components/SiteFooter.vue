<template>
	<div>
		<p>
			Social Media Links
		</p>

		<p>
			Email
		</p>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
nav {
	padding: 1rem;
	background-color: #333333;

    & a {
		color: #42b983;
		font-weight: bold;
		margin: 0 .25rem;
		padding: 1rem;

		&:hover,
		&.router-link-active {
			color: #FFFFFF;
			text-decoration: underline;
			background-color: #42b983;
		}
    }
}
</style>
