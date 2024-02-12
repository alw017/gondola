<script>

export default {
    data() {
        return {
            showWindow: true
        }
    },
    mounted() {
        setTimeout(() => this.showWindow = false, 1000);
    }
}

</script>

<template>
    <Transition :duration="2000">
        <div v-if="showWindow" id="load-window" class="load-in">
            <div id="name-text" class="name-port">
                <p class="pad load-name">Alexander Wang</p>
                <p class="pad load-port">
                    Project Portfolio
                </p>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.v-leave-active{
    transition: opacity 1000ms linear;
    transition-delay: 1000ms;
}

.v-leave-to{
    opacity: 0;
}
.v-leave-active .name-port{
    transition: transform 1000ms cubic-bezier(.85,0,.65,.65), opacity 1000ms cubic-bezier(.85,0,.65,.65);
} 
.v-leave-to .name-port{
    opacity: 0;
    transform: translate(-50%, 50%);
}



.pad {
    padding: 5px;
}

.load-in {
    color:antiquewhite;
    position:fixed;
    z-index: 8000;
    width: 100%;
    height: 100%;
    background-color: #1f1f1f;
    font-size:30px;
}

.vl {
    background-color: antiquewhite;
    height: 100%;
    width: 2px;
}
.name-port {
    display:flex;
    font-weight:200;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
}

.load-name {
}
.load-port {
    font-weight:400;
}

</style>