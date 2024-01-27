<div id="navContainer" class="p-2 bg-opacacity-50">
    <div class='h-16 ml-10'>
        <a href="/">
            <img
            class="h-full w-full mx-auto"
            src="/python_bulawayo.svg"
            alt="svelte logo" />
        </a>
    </div>
    <div class="mr-10">
        <ul class="flex flex-row space-x-8">
            <li><h1 class="text-2xl">|</h1></li>
            <li><a href="/events" class="hover:underline text-2xl">Events</a></li>
            <li><h1 class="text-2xl">|</h1></li>
            <li><a href="/projects" class="hover:underline text-2xl">Projects</a></li>
            <li><h1 class="text-2xl">|</h1></li>
        </ul>   
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