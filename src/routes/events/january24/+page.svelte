<script>
    import BottomTing from "./BottomTing.svelte";
    import Card from "./Card.svelte";
    
</script>

<div id="bigTing">
    <div class="flex flex-col justify-center mx-8 border-2 border-black p-6 rounded-lg z-10">
        <div class="p-4 flex flex-col justify-center items-center space-y-4">
            <h3 class="font-sans text-gray-800">27 January 2024</h3>
            <h1 class="sans-serif text-gray-800 text-6xl ">Python</h1>
            <h1 class="sans-serif text-gray-800 text-6xl ">Bulawayo</h1>
            <h1 class="sans-serif text-gray-800 text-6xl ">Meetup</h1>
        </div>
    
        <div class="text-5xl flex justify-center relative z-20 pointer-events-none">
            <Card>
                <div slot=header>
                    <h1 class="text-sm font-sans flex justify-center -m-2"> 📍BYOTECH HUB</h1>
                    
                    <h1 class="text-sm font-sans flex justify-center mt-2"> ⌚9AM</h1>
                </div>
    
                <div slot="content" class="-mt-4">
    
                    <p class="font-sans font-2xl">South Wing 2nd Floor Salamaat Building</p>
                    <p class="font-sans font-2xl">Between G.Silundika & R.Mugabe</p>
                    <p class="font-sans font-2xl">9th Avenue, Bulawayo, Zimbabwe</p>
                </div>
               
            </Card>
        </div>
    
        <div class="mt-4 -mb-12 flex flex-col md:flex-row items-center space-y-4">
            <button type="button" class="bg-black font-sans btn text-white">Register to attend</button>
            <button type="button" class="text-black font-sans btn variant-ringed-surface">Useless Button</button>
        </div>
    
    </div>
    
    
    <div class="flex flex-col m-8 border-2 border-black p-4 rounded-lg">
        <div class="text-5xl m-8 flex justify-center">
            <h1 class="sans-serif text-gray-800">What it's all about</h1>
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
