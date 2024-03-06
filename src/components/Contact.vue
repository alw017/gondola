<script>
export default {
    data() {
        return {
            showCopied: false,
        }
    },
    methods: {
        copyToClipBoard(event) {
            this.showCopied = true;
            navigator.clipboard.writeText("wang.alexander204@gmail.com");
            setTimeout(() => this.showCopied = false, 2000)
        }
    }
}
</script>

<template>
    <section class="full-window"> 
        <div class="contact">
            <div class="email-text" @click="copyToClipBoard" style="padding-bottom:2vmin">
                <Transition name="popup"><div class="copy-popup" v-if="showCopied">Copied!</div></Transition>
                Email: wang.alexander204@gmail.com 
                <i class="material-icons copy-symbol">content_copy</i>
            </div>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/alexander-wang-8b6bb41ba/">Linkedin <i class="material-icons">arrow_outward</i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/alw017">Github <i class="material-icons">arrow_outward</i></a>
        </div>
    </section>
</template>

<style scoped>

.popup-enter-active,
.popup-leave-active {
    transition: opacity 300ms cubic-bezier(0.1, 0.4, 0.2, 1);
}

.popup-enter-from ,
.popup-leave-to {
    opacity: 0
}

i {
    transform: translate3d(-20%, 18%, 0);
}

.copy-popup {
    position:absolute;
    left: 50%;
    top: -20%;
    transform: translate(-50%, 0);
    font-size:15px;
    padding:5px;
}
.copy-symbol {
    transform: translate3d(-15%, 22%, 0) scale(0.8);
    transition: opacity 300ms;
    transition-timing-function: cubic-bezier(0.1,0.4,0.12, 1);
}

.email-text:hover > .copy-symbol {
    opacity: 0.4;
}

.email-text {
    cursor:pointer;
}

a {
    display:block;
    color: antiquewhite;
    text-decoration: none;
    transition: opacity 300ms;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.12, 1);
}

a:hover {
    opacity: 0.4;
}
.contact {
    display:block;
    position: absolute;
    right:16vmin;
    top:50%;
    transform: translate(0, -50%);
    color:antiquewhite;
    white-space: nowrap;
}
</style>