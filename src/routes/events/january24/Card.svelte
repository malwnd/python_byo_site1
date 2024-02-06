<div class="border border-black max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 text-gray-800">
    <div class="font-bold px-6 py-4">
      <div class="text-xl"><slot name="header" /></div>
    </div>
    <div class="px-6 py-4">
      <div class="text-gray-700 text-base">
        <slot name="content"/>
      </div>
    </div>
</div>

<!-- Component is redundant, use the Card component from library and implemnet responsiveness -->