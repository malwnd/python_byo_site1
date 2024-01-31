<script>
	import '../app.postcss';
    import NavBar from './NavBar.svelte';
    import Footer from './Footer.svelte';
    
</script>

<div class="flex flex-col min-h-screen space-between">

    <!-- NavBar Component here -->
    <div class="top-0 text-gray-800">
        <NavBar />
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




