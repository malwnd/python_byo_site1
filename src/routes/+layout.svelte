 <script>
	import '../app.postcss';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	
	import NavSide from '$lib/NavSide.svelte';
	import MobileNav from '$lib/MobileNav.svelte';
	import Hamburger from '$lib/Hamburger.svelte';
	
	
	initializeStores();
	const drawer = getDrawerStore();

	function drawerOpen(){
		drawer.open({});
	}

</script>

<Drawer position="right" margin="m-4">
	<MobileNav />
</Drawer>

<AppShell>
	<div class="-m-2 -mt-2">
		<AppBar class="" background="bg-transparent">
			<svelte:fragment slot="lead">
				<div class='h-16'>
					<a href="/">
						<img
						class="dark:invert h-full w-full mx-auto -mt-1"
						src="/python_bulawayo.svg"
						alt="python_byo logo" />
					</a>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<div>
					<NavSide />
				</div>
				<div class="md:hidden dark:invert">
					<Hamburger on:click={drawerOpen}/>
					<!-- <button on:click={drawerOpen}>click me</button> -->

				</div>
			</svelte:fragment>	

		</AppBar>
	</div>
	

	<!-- Page Route Content -->
	<slot />
</AppShell>

