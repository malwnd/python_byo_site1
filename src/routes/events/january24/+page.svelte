<script>
    import BottomTing from "./BottomTing.svelte";
    import Card from "./Card.svelte";

    // alter card import to this if you want to use the global card component
    // import Card from "$lib/Card.svelte";
    // Remove bottom ting for simplicity

    // Optimize to load events from an api
    
</script>

<div id="bigTing">
    <div class="flex flex-col justify-center mx-8 border-2 border-black p-6 rounded-lg z-10">
        <div class="p-4 flex flex-col justify-center items-center space-y-4">
            <h3 class="font-sans text-gray-800 dark:text-white">27 January 2024</h3>
            <h1 class="sans-serif text-gray-800 text-6xl dark:text-white">Python</h1>
            <h1 class="sans-serif text-gray-800 text-6xl dark:text-white">Bulawayo</h1>
            <h1 class="sans-serif text-gray-800 text-6xl dark:text-white">Meetup</h1>
        </div>
    
        <div class="text-5xl flex justify-center relative z-20 pointer-events-none">
            <Card>
                <div slot="title">
                    <h1 class="text-sm font-sans flex justify-center"> 📍BYOTECH HUB</h1> 
                    <h1 class="text-sm font-sans flex justify-center"> ⌚9AM</h1>
                </div>
    
                <div slot="content" class="">
                    <p class="font-sans text-base">S.Wing 2nd Floor Salamaat Building</p>
                    <p class="font-sans text-base">Between G.Silundika & R.Mugabe</p>
                    <p class="font-sans text-base">9th Ave Bulawayo, Zimbabwe</p>
                </div>
               
            </Card>
        </div>
    
        <div class="flex flex-col md:flex-row justify-text">
            <button type="button" class="bg-black font-sans btn text-white">Register to attend</button>
            <button type="button" class="text-black font-sans btn variant-ringed-surface">Useless Button</button>
        </div>
    
    </div>
    
    
    <div class="flex flex-col m-8 border-2 border-black p-4 rounded-lg">
        <div class="text-5xl m-8 flex justify-center">
            <h1 class="sans-serif text-gray-800 dark:text-white">What it's all about</h1>
        </div>
        <BottomTing />
    </div>
</div>


<style>
    #bigTing{
        /* background-image: url('/bhruwayo.webp'); */
        /* background-size: cover;
        background-position: center; */
    }
</style>
