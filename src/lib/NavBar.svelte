<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import Hamburger from './Hamburger.svelte';

    import {fade, fly} from 'svelte/transition';
    export let sidebar = false;

</script>

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

            <div class="">
                <Hamburger bind:open={sidebar} />
                
            </div>
        </div>
        
    </svelte:fragment>
	
</AppBar>