<script>
	import '../app.postcss';
    import NavBar from '$lib/NavBar.svelte';
    import Footer from '$lib/Footer.svelte';
    import MobileSideBar from '../lib/MobileSideBar.svelte';

    let open = false;

    

</script>

<div class="flex flex-col min-h-screen space-between">

    <!-- Mobile SideBar Component here -->
    <MobileSideBar bind:open />

    <!-- NavBar Component here -->
    <div class="top-0 text-gray-800">
        <NavBar bind:sidebar={open}/>
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




