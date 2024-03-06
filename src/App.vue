<script setup>
import Frame from './components/Frame.vue'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Mask from './components/Mask.vue'
import LoadIn from './components/LoadIn.vue'
import UnifiedContent from './components/UnifiedContent.vue'
</script>

<script>
export default {
    components: {
        Content
    },
    data() {
        return{
            selectedOption: "home"
        }
    },
    methods: {
        handleNav(nav) {
            console.log(nav);
            switch(nav) {
                case "home":
                    this.selectedOption = "home";
                    break;
                case "proj":
                    this.selectedOption = "projects";
                    break;
                case "contact":
                    this.selectedOption = "contact";
                break;
            }
        }
    }
}
</script>


<template>
    <LoadIn></LoadIn>
    <Frame></Frame>
    <Mask></Mask>
    <UnifiedContent></UnifiedContent>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
