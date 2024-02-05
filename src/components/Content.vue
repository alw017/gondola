<script setup>
import { createHydrationRenderer, createRenderer } from 'vue';

    defineProps({
        currentSelected: String,
    })
</script>

<script>
    export default {
        created(){
            window.addEventListener('wheel', this.handleScroll);
        },
        unmounted() {
            window.removeEventListener('wheel', this.handleScroll);
        },
        data() {
           return {
                ypos: 0
           } 
        },
        computed: {
            style() {
                return { transform: 'translate3d(0px, ' + this.ypos + 'px, 0px)' }
            }
        },
        methods: {
            handleScroll(event) {
                this.ypos -= event.deltaY;
            }
        }
    }   
</script>

<template>
    <main class="content-container">
        <section class="full-window" v-if="currentSelected === 'home'">
            <div class="home">
                Hi, my name’s Alex, and I love making new things. I want to work on difficult projects and solve problems which don’t always have a clear solution. I’m planning on pursuing a rich career in embedded systems design.
            </div>
        </section>
        <section class="full-window flex-cards" v-if="currentSelected === 'projects'">
                <div class="flex-card-container" :style="style">
                    <div class="card">
                        Card Contents
                    </div>
                    <div class="card">
                        Card Contents
                    </div>
                    <div class="card">
                        Card Contents
                    </div>
                    <div class="card">
                        Card Contents
                    </div>
                    <div class="card">
                        Card Contents
                    </div>
                    <div class="card">
                        Card Contents
                    </div>
                </div>
        </section>
        <section class="full-window" v-if="currentSelected === 'contact'" >
            <div class="contact">
                <div style="padding-bottom:2vmin">Email: wang.alexander204@gmail.com</div>
                <div>Linkedin <i class="material-icons">arrow_outward</i></div>
                <div>Github <i class="material-icons">arrow_outward</i></div>
            </div>
        </section>
    </main>
</template>

<style scoped>

.flex-cards {
    position:relative;
    min-height:100%;
}
.flex-card-container {
    display: flex;
    flex-direction:column;
    padding-top: calc(2vmin + 150px);
    padding-left: calc(2vmin + 40%);
    padding-right:4vmin;
    padding-bottom: calc(2vmin + 150px);
    transform:translate3d(0px, 0px, 0px);
    transition: transform;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(.1,.4,.12,1);
}

.card {
    width: 100%;
    height: max(50vh, 400px);
    margin-bottom: 2vmin;
    background-color:grey;
}

.content-container {
    position: fixed;
    left:0;
    top:0;
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
    color:antiquewhite;
    width:120px;
    position: absolute;
    top:50%;
    transform: translate(0, -50%);
    right:4vmin;
}

.projects {
    display:block;
    position: absolute;
    right: 4vmin;
    color:antiquewhite;
    min-height: 100%;
    height: 100%;
}

.contact {
    display:block;
    position: absolute;
    right:4vmin;
    top:50%;
    transform: translate(0, -50%);
    color:antiquewhite;
    white-space: nowrap;
}
</style>

