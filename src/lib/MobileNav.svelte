<script>
    import { LightSwitch } from "@skeletonlabs/skeleton";
</script>

<main>
        <nav class="list-nav md:hidden p-4 flex justify-center">
            <ul>
                <li class=""><a href="/" class="justify-center hover:underline text-2xl">HOME</a></li>
                <li class=""><a href="/blog" class="justify-center hover:underline text-2xl">BLOG</a></li> 	
                <li class=""><a href="/events" class="justify-center hover:underline text-2xl">EVENTS</a></li>	
                <li class=""><a href="/gallery" class="justify-center hover:underline text-2xl">GALLERY</a></li>	

                <li><a href="/projects" class="hover:underline text-2xl">PROJECTS</a></li>
                <div class="p-4 m-4 flex justify-center scale-x-[-1]">
                    <LightSwitch />
                </div>
                <!-- <LightSwitch /> -->
            </ul>  
        </nav>
</main>