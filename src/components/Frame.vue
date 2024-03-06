<script setup>

defineProps({
    msg: String,
})

</script>

<template>
    <div class="frame-container">
        <div class="frame frame-left"></div>
        <div class="frame frame-right"></div>
        <div class="frame frame-top"></div>
        <div class="frame frame-bottom"></div>
    </div>
</template>

<style scoped>

.frame {
    position: absolute;
    background-color: gold;
    opacity:0.45;
}
.frame-container{
    position:fixed;
    left: 4vmin;
    right: 4vmin;
    top: 4vmin;
    bottom: 4vmin;
}

.frame-top {
    top:0;
    left:0;
    width:calc(100% - 1px);
    height:1px;
}

.frame-bottom {
    bottom:0;
    left:0;
    width:calc(100% - 1px);
    height: 1px;
}

.frame-left {
    top:1px;
    left:0;
    height:calc(100% - 2px);
    width:1px;
}

.frame-right {
    top:0;
    right:0;
    height:100%;
    width:1px
}
</style>