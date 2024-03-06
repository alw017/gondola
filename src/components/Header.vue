<script setup>

defineProps({
    msg: String,
})

</script>

<template>
<header>
    <h1 class="header-title">
        Alexander Wang
    </h1>
    <p class="header-subtitle">Aspiring Software Developer and Engineer</p>
    <nav>
        <ol>
            <li class="text" @click="$emit('handleNav', 'home')">
                <Transition mode="out-in">
                    <div v-if="msg==='home'"><b>&#8212</b></div>
                    <div v-else-if="msg!='home'">Home</div>
                </Transition>
            </li>
            <li class="text" @click="$emit('handleNav', 'proj')">
                <Transition mode="out-in">
                    <div v-if="msg==='proj'"><b>&#8212</b></div>
                    <div v-else-if="msg !='proj'">Projects</div>
                </Transition>
            </li>
            <li class="text" @click="$emit('handleNav', 'contact')">
                <Transition mode="out-in">
                    <div v-if="msg==='contact'"><b>&#8212</b></div>
                    <div v-else-if="msg!='contact'">Contact</div>
                </Transition>
            </li>
        </ol>
    </nav>
</header>
</template>

<style scoped>

.v-enter-active {
    transition: opacity 200ms cubic-bezier(0.1, 0.4, 0.12, 1);
}
.v-leave-active {
    transition: opacity 200ms cubic-bezier(0.1, 0.4, 0.2, 1);
    transition-delay: 300ms;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.text:hover {
    opacity: 0.4;
}

.text { 
    transition: opacity 300ms;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.12, 1);
    font-size:20px;
    cursor:pointer;
}

.header-subtitle {
    margin-top: 5px;
    font-size: 25px;
}
.header-title{ 
    font-size: 60px;
    font-weight: 400;
}

header {
    width: calc(40% - 10vmin);
    font-family: "Josefin Sans", sans-serif;
    font-weight: 200;
    font-style:normal;
    z-index: 80;
    position: fixed;
    left: 8vmin;
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