<script>
    import Card from "./january27/Card.svelte";
</script>


<div class="m-6 border border-black max-w-xs rounded shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
    <div class="font-bold p-4 flex flex-col justify-center items-center">
      
        <div class="flex flex-col justify-center items-center">
            <div >
                <a href="/events/january27" class="flex justify-center">
                    <img src="/january27.webp" class="rounded-lg " alt="" srcset="">
                </a>
                
            </div>
            <div class="mt-4 font-sans text-gray-700 text-xl">
                <h1><a href="/events/january27">January 2024 Meetup</a></h1>
            </div>
        </div>

    </div>
    <div class="p-4 -mt-4">
      <div class="text-gray-700 text-base space-x-4 flex">
        
            <button class="chip variant-soft hover:variant-filled">
                <span>Open Source</span>
            </button>

            <button class="chip variant-soft hover:variant-filled">
                <span>Django</span>
            </button>

            <button class="chip variant-soft hover:variant-filled">
                <span>React</span>
            </button>
      </div>
    </div>
</div>



<style>
    img{
        width: 75%;
        /* height: 75%; */
    }
</style>