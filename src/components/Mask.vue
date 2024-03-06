<template>
        <div class="mask-top">
        </div>
        <div class="mask-bottom">
        </div>
</template>

<style scoped>

.mask-top, .mask-bottom {
    z-index: 101;
    position: fixed;
    height: 4vmin;
    width:100%;
    left: 0;
    background-color: #292929;
    opacity: 0.9;
    overflow:hidden;
}

.mask-top {
    top: 0;
}

.mask-bottom {
    bottom: 0;
}
</style>