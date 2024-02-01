<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<main>
    <div class="hidden md:flex flex-row">
        <ul class="flex flex-row space-x-8 items-center">
            <li><a href="/events" class="hover:underline text-2xl">EVENTS</a></li>	
            <li><a href="/projects" class="hover:underline text-2xl">PROJECTS</a></li>
            <div class="scale-x-[-1]">
                <LightSwitch />
            </div>
            
        </ul>  
    </div>

    <!-- <div class="flex flex-column md:hidden">
        <ul class="flex flex-column space-y-8 items-center">
            <li><a href="/events" class="hover:underline text-2xl">EVENTS</a></li>	
            <li><a href="/projects" class="hover:underline text-2xl">PROJECTS</a></li>
            <LightSwitch />
        </ul>  
    </div> -->
</main>