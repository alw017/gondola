<script setup>
    defineProps({
        currentSelected: String,
    })
</script>

<template>
    <main class="content-container">
        <section class="full-window" v-if="currentSelected === 'home'">
            <div class="home">
                Hi, my name’s Alex, and I love making new things. I want to work on difficult projects and solve problems which don’t always have a clear solution. I’m planning on pursuing a rich career in embedded systems design.
            </div>
        </section>
        <section class="full-window" v-if="currentSelected === 'projects'">
            <div  class="projects">
                Projects
            </div>
        </section>
        <section class="full-window" v-if="currentSelected === 'contact'" >
            <div class="contact">
                Contact
            </div>
        </section>
    </main>
</template>

<style scoped>

.content-container {
    overflow:hidden;
    width: 100%;
    height: 100%;
}
.full-window {
    display:block;
    width: 100%;
    min-height: 100%;
}
.home {

}

.projects {

}

.contact {
    
}
</style>

