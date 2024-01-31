<script>
    import { initializeStores, Drawer, getDrawerStore} from '@skeletonlabs/skeleton'

    initializeStores()
    const drawer = getDrawerStore()
</script>

<!-- This belongs in the lib directory but continue -->
<div id="navContainer" class="flex flex-row">
    <div class='h-16 m-2'>
        <a href="/">
            <img
            class="h-full w-full mx-auto"
            src="/python_bulawayo.svg"
            alt="python_byo logo" />
        </a>
    </div>
    <div class="mr-10 hidden md:flex">
        <ul class="flex flex-row space-x-8">
            <li><h1 class="text-2xl">|</h1></li>
            <li><a href="/events" class="hover:underline text-2xl">Events</a></li>
            <li><h1 class="text-2xl">|</h1></li>
            <li><a href="/projects" class="hover:underline text-2xl">Projects</a></li>
            <li><h1 class="text-2xl">|</h1></li>
        </ul>   
    </div>
    
    <!-- Mobile Side Menu -->
    <div class="md:hidden">
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

<!-- <div class="border-t-2 border-black"></div> -->


<style>
    #navContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>