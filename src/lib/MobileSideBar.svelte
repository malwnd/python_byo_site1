<script>
	export let open = false
</script>

<aside class="absolute w-9/12 h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">About</a>
		<a class="block" href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		right: 100%;
		/* transition: left 0.5s ease-in-out */
	}
	
	.open {
		right: 0
	}
</style>