<script>
    import Card from "./Card.svelte";
</script>

<div class="flex flex-row justify-center space-x-16">
    <!-- Learning Card Component -->
    <Card>
        <h1 slot="header">Learning</h1>
        <p slot="content">
            Dive into collaborative learning sessions to deepen your understanding of new technologies.
        </p>
    </Card>

    <!-- Connecting Card Component -->
    <Card>
        <h1 slot="header">Connecting</h1>
        <p slot="content">
            Explore opportunities to contribute to open-source projects and make a lasting impact.
        </p>
    </Card>

    <!-- Building Card Component -->
    <Card>
        <h1 slot="header">Building</h1>
        <p slot="content">
            Establish meaningful relationships within the developer community, fostering a supportive and collaborative environment.
        </p>
    </Card>
</div>