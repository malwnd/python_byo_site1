<script>
	import { createEventDispatcher } from "svelte";
	
	export let open = false;
	const dispatch = createEventDispatcher();
	
	function handleClick() {
		dispatch("click");
		open = !open
	}
</script>

<button class="text-black cursor-pointer border-none focus:outline-none" class:open on:click={handleClick}>
    <div class="flex items-center">
        <button class="btn btn-sm">
            <span>
                <svg viewBox="0 0 200 120" class="fill-token w-8 h-6 dark:invert">
                    <rect rx="10" ry="10" width="200" height="25" />
                    <rect rx="10" ry="10" x="25" y="50" width="175" height="25" />
                    <rect rx="10" ry="10" y="100" width="200" height="25" />
                </svg>
            </span>
        </button>
        <!-- <strong class="text-xl uppercase">Skeleton</strong> -->
    </div>
</button>
