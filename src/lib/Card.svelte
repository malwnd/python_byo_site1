<main>
    <div class="w-64 lg:w-72 overflow-hidden rounded-md shadow-lg transition-transform transfrom hover:scale-105 flex flex-col items-center space-y-2">
        
        <div>
            <slot name="image">
                <!-- <a href="/events/january24">
                    <img src="/january24.webp" class="w-full" alt="" srcset="">
                </a> -->
            </slot>
        </div>

        <div class="mt-4 font-sans text-gray-700 dark:text-gray-300 text-xl">
            <slot name="title">
                <!-- <h1><a href="/events/january24">January 2024 Meetup</a></h1> -->
            </slot>
        </div>

        <!-- Element Not Used Events -->
        <div class="text-justify px-4">
            <slot name="desc">
                <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> -->
            </slot>
        </div>

        <div class="">
            <slot name="tags"></slot>
        </div>
    </div>
</main>

