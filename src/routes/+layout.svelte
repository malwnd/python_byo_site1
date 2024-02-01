<script>
	import '../app.postcss';
    import NavBar from '$lib/NavBar.svelte';
    import Footer from '$lib/Footer.svelte';

    import { AppBar } from '@skeletonlabs/skeleton';

    import { initializeStores, Drawer, getDrawerStore} from '@skeletonlabs/skeleton'

    initializeStores()
    const drawer = getDrawerStore()   
    
    function drawerOpen() {
        getDrawerStore.drawerOpen({})
    }
</script>

<!-- <Drawer>(Contents)</Drawer> -->

<AppBar gridColumns="grid-cols-3" class="" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
        <div class="flex flex-row items-center justify-between flex-grow">
            <div class='h-16'>
                <a href="/">
                    <img
                    class="h-full w-full mx-auto -mt-1"
                    src="/python_bulawayo.svg"
                    alt="python_byo logo" />
                </a>
            </div>

            <div class="hidden md:flex text-black">
                <ul class="flex flex-row space-x-8">
                    <li><h1 class="text-2xl">|</h1></li>
                    <li><a href="/events" class="hover:underline text-2xl">Events</a></li>
                    <li><h1 class="text-2xl">|</h1></li>
                    <li><a href="/projects" class="hover:underline text-2xl">Projects</a></li>
                    <li><h1 class="text-2xl">|</h1></li>
                </ul>   
            </div>

        </div>
        
    </svelte:fragment>
	
	<svelte:fragment slot="trail">
        
    </svelte:fragment>
</AppBar>
<div class="flex flex-col min-h-screen space-between">

    <!-- NavBar Component here -->
    <div class="top-0 text-gray-800">
        <!-- <NavBar /> -->
    </div>


    <div class="flex-1 my-8">
        <!-- Content is injected here -->
        <slot />
    </div>

    <!-- Footer Content injected Here -->
    <div class="bottom-0 text-gray-800 ">
        <Footer />
    </div>
  

</div>




