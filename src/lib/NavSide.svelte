<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<main>
    <div class="hidden md:flex flex-row">
        <ul class="flex flex-row space-x-8 items-center">
            <li><a href="/" class="hover:underline text-2xl">HOME</a></li>
            <li><a href="/events" class="hover:underline text-2xl">BLOG</a></li>
            <li><a href="/events" class="hover:underline text-2xl">EVENTS</a></li>
            <li><a href="/events" class="hover:underline text-2xl">GALLERY</a></li>	
            <li><a href="/projects" class="hover:underline text-2xl">PROJECTS</a></li>
            <div class="scale-x-[-1]">
                <LightSwitch />
            </div>    
        </ul>  
    </div>
</main>