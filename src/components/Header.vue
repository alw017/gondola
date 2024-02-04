<script setup>

defineProps({
    msg: String,
})

</script>

<template>
<header>
    <h1>
        Alexander Wang
    </h1>
    <p class="header-subtitle">Aspiring Software Developer and Engineer</p>
    <nav>
        <ol>
            <li @click="$emit('homeClick')">Home</li>
            <li @click="$emit('projectClick')">Projects</li>
            <li @click="$emit('contactClick')">Contact</li>
        </ol>
    </nav>
</header>
</template>

<style scoped>
.header-subtitle {
    margin-top: 5px;
}

header {
    position: fixed;
    height:30%;
    left: 40px;
    top: 50%;
    transform: translate(0, -50%);
    color:antiquewhite;
}

ol {
    display:flex;
    flex-direction: column;
    row-gap:15px;
}

nav {
    margin-top: 40px;
}
</style>