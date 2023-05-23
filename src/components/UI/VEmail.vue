<template>
	<a class="email"
		 :href="`mailto:${email}`">
		{{ email }}
	</a>
</template>

<script>
export default {
	props: {
		email: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss">
.email {
	font-family: inherit;
	font-style: inherit;
	font-weight: inherit;
	font-size: inherit;
	line-height: inherit;
	color: inherit;
}
</style>
