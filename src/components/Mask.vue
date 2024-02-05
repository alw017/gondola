<template>
    <div class="mask">
        <div class="mask-top">
        </div>
        <div class="mask-bottom">
        </div>
    </div>
</template>

<style scoped>

.mask {
    z-index: 1;
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:hidden;
}

.mask-top, .mask-bottom {
    position: absolute;
    height: 2vmin;
    width:100%;
    left: 0;
    background-color: #1f1f1f;
    opacity: 0.9;
}

.mask-top {
    top: 0;
}

.mask-bottom {
    bottom: 0;
}
</style>