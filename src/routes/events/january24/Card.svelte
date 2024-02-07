<div class="w-72 p-4 my-4 rounded-md shadow-lg transition-transform transfrom hover:scale-105 flex flex-col">

  <div class="font-sans text-gray-700 dark:text-gray-300 text-xl">
      <slot name="title">
          <!-- <h1><a href="/events/january24">January 2024 Meetup</a></h1> -->
      </slot>
  </div>

  <div class="text-gray-700 text-base text-left">
      <slot name="content"/>
  </div>

</div>

<!-- Component is redundant, use the Card component from library and implemnet responsiveness -->