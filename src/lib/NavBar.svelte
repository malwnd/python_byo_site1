<script>
    import { AppBar } from '@skeletonlabs/skeleton';
</script>t

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
                <div class="flex items-center">
                    <button class="btn btn-sm">
                        <span>
                            <svg viewBox="0 0 100 75" class="fill-black w-5 h-4">
                                <rect width="125" height="15"/>
                                <rect y="30" width="125" height="15"/>
                                <rect y="60" width="125" height="15"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        
    </svelte:fragment>
	
</AppBar>