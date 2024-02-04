<script>
    import Card from "$lib/Card.svelte";
    import Chip from "$lib/Chip.svelte";

 
    // These can be consumed from an API instead of hardcoding like this
    // Flask, FastAPI and Pocketbase are mouthwatering options for this case
    let events = [
        {
            title: "January 2024 Meetup",
            image: "/january24.webp",
            link: "/events/january24",
            tags: ["Open Source", "Django", "React"]
        },
    ]

</script>

<main class="p-2 lg:p-4">

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {#each events as event}
                <Card>
                    <span slot="image">
                        <a href={event.link}>
                            <img src={event.image} class="w-full" alt="" srcset="">
                        </a>
                    </span>

                    <span slot="title">
                        <h1><a href={event.link}>{event.title}</a></h1>
                    </span>

                    <span slot="tags">
                        <div class="flex flex-row text-gray-700 text-base space-x-4">
                            {#each event.tags as tag}
                                <Chip tag={tag} />
                            {/each}
                        </div>
                    </span>
                </Card>
            {/each}

    </div>

</main>