<script setup>
import Header from './Header.vue'
import Projects from './Projects.vue'
import Home from './Home.vue'
import Contact from './Contact.vue'

</script>

<script>
export default {
    components: {
        Projects
    },
    created(){
        window.addEventListener('wheel', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('wheel', this.handleScroll);
    },
    data() {
        return {
            selectedOption: "home",
            ypos: 0,
            cardSelected: false
        }
    },
    methods: {
        handleScroll(event) {
            if(this.selectedOption != 'proj' || this.cardSelected) {
                return;
            }
            var cardContainer = document.getElementById('flex-card-container');
            this.ypos -= event.deltaY;
            if(-1 * this.ypos < 0) {
                this.ypos = 0;
            }
            let max_transform = parseFloat(window.getComputedStyle(cardContainer).getPropertyValue('height')) +
                                2*parseFloat(window.getComputedStyle(cardContainer).getPropertyValue('padding-top')) -
                                window.innerHeight;
            if (-1 * this.ypos > max_transform){
                this.ypos = -max_transform;
            }
        },
        handle(nav) {
            console.log(nav);
            switch(nav) {
                case "home":
                case "contact":
                case "proj":
                    this.selectedOption = nav;
                    break;
                default:
            }
        }
    }
}
</script>

<template>
    <Header :msg="selectedOption" @handle-nav="handle"></Header>
    <Transition mode="out-in">
        <Home v-if="selectedOption === 'home'"></Home>
        <Contact  v-else-if="selectedOption === 'contact'"></Contact>
        <Projects :scrollPos="ypos"v-else-if="selectedOption === 'proj'" @cardclick="cardSelected=true" @cardexit="cardSelected=false"></Projects>
    </Transition>
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

</style>