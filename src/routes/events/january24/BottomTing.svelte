<script>
    import Card from "./Card.svelte";
</script>

<div class="flex flex-col md:flex-row justify-around">
    <!-- Learning Card Component -->
    <Card>
        <h1 slot="title">Learning</h1>
        <p slot="content">
            Dive into collaborative learning sessions to deepen your understanding of new technologies.
        </p>
    </Card>

    <!-- Connecting Card Component -->
    <Card>
        <h1 slot="title">Connecting</h1>
        <p slot="content">
            Explore opportunities to contribute to open-source projects and make a lasting impact.
        </p>
    </Card>

    <!-- Building Card Component -->
    <Card>
        <h1 slot="title">Building</h1>
        <p slot="content">
            Establish meaningful relationships within the developer community, fostering a supportive and collaborative environment.
        </p>
    </Card>
</div>

<!-- Component might be redundant esp with the use of Card Components, can be altered to use card component from lib and implement responsiveness and theming -->