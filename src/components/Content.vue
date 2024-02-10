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
                ypos: 0,
                cards: [{title: "Internship Project", body: "blah blah", id: 0, isSelected: false, isFocused: false}, 
                        {title: "Personal Project", body: "blah blah", id: 1, isSelected:false, isFocused: false}, 
                        {title: "Personal Project 2", body: "blah blah", id:2, isSelected:false, isFocused: false}]
           } 
        },
        computed: {
            style() {
                return { transform: 'translate3d(0px, ' + this.ypos + 'px, 0px)' }
            }
        },
        methods: {
            handleScroll(event) {
                if(this.currentSelected != 'projects') {
                    return;
                }
                var cardContainer = document.getElementById('flex-card-container');
                this.ypos -= event.deltaY;
                if(-1 * this.ypos < 0) {
                    this.ypos = 0;
                }
                let max_transform = parseFloat(window.getComputedStyle(cardContainer).getPropertyValue('height'))+2*parseFloat(window.getComputedStyle(cardContainer).getPropertyValue('padding-top'))-window.innerHeight;
                if (-1 * this.ypos > max_transform){
                    this.ypos = -max_transform;
                }
            },
            handleClick(card) {
                /* todo: grab all card elements, 
                 * fade them out
                 * set position of current card to fixed, initialize at current grabbed position of div, then animate expanding to full screen.
                 * remove all non selected cards from dom display?
                 * disablescroll handling,etc. 
                 */
                card.isSelected = !card.isSelected;
            },
            handleFocus(card) {
                card.isFocused = true;
            },
            handleUnfocus(card) {
                card.isFocused = false;
            }
        }
    }   
</script>

<template>
    <main class="content-container">
        <Transition mode="out-in">
            <section class="full-window flex-cards" v-if="currentSelected === 'projects'">
                    <div id="flex-card-container" class="flex-card-container" :style="style">
                        <div class="card" v-for="card in cards" :class="{ selected: card.isSelected, focused: card.isFocused, unfocused: !card.isFocused }" @mouseenter="handleFocus(card)" @mouseleave="handleUnfocus(card)" @click="handleClick(card)">
                            <h2>
                                {{ card.title }}
                            </h2>
                            <p>
                                {{ card.body }}
                            </p>
                        </div>
                    </div>
            </section>
            <section class="full-window" v-else-if="currentSelected === 'home'">
                <div class="home">
                    Hi, my name’s Alex, and I love making new things. I want to work on difficult projects and solve problems which don’t always have a clear solution. I’m planning on pursuing a rich career in embedded systems design.
                </div>
            </section>
            <section class="full-window" v-else-if="currentSelected === 'contact'" >
                <div class="contact">
                    <div style="padding-bottom:2vmin">Email: wang.alexander204@gmail.com</div>
                    <div>Linkedin <i class="material-icons">arrow_outward</i></div>
                    <div>Github <i class="material-icons">arrow_outward</i></div>
                </div>
            </section>
        </Transition>
    </main>
</template>

<style scoped>

.v-enter-active,
.v-leave-active {
    transition: opacity 300ms cubic-bezier(0.1, 0.4, 0.12, 1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.selected {

}

.focused {
    transform:scale(1.02);
    transition: transform 300ms;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.12, 1);
}

.unfocused {
    transform:scale(1);
    transition: transform 300ms;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.12, 1);
}

.flex-cards {
    position:relative;
    min-height:100%;
}
.flex-card-container {
    display: flex;
    flex-direction:column;
    padding-top: var(--content-padding);
    padding-left: calc(2vmin + 40%);
    padding-right:4vmin;
    padding-bottom: var(--content-padding);
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

.card:hover {
    transform:scale(1.02);
    transition: transform 300ms;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.12, 1);
}

.content-container {
    position: fixed;
    left:0;
    top:0;
    overflow:hidden;
    width: 100%;
    height: 100%;
    z-index: 15;
}
.full-window {
    display:block;
    width: 100%;
    min-height: 100%;
}
.home {
    color:antiquewhite;
    width:200px;
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

