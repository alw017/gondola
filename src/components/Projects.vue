<script setup>
    defineProps({
        scrollPos: Number,
    })
</script>

<script>
    export default {
        data() {
           return {
                showCopied: false,
                cardSelected: null,
                selecedCardPosition: 0,
                cards: [{title: "Internship at Wealthland Capital LLC", body: "blah blah", id: 0, isSelected: false, isFocused: false}, 
                        {title: "Personal Project", body: "blah blah", id: 1, isSelected:false, isFocused: false}, 
                        {title: "Personal Project 2", body: "blah blah", id:2, isSelected:false, isFocused: false}]
           } 
        },
        computed: {
            style() {
                return { transform: 'translate3d(0px, ' + this.scrollPos + 'px, 0px)' }
            }
        },
        methods: {
            handleClick(card) {
                /* todo: grab all card elements, 
                 * fade them out
                 * set position of current card to fixed, initialize at current grabbed position of div, then animate expanding to full screen.
                 * remove all non selected cards from dom display?
                 * disablescroll handling,etc. 
                 */
                console.log("selected")
                card.isSelected = true;
                this.cardSelected = card;
                this.$emit('cardclick');
            },
            handleExit() {
                console.log(this.cardSelected)
                this.cardSelected.isSelected = !this.cardSelected.isSelected;
                this.cardSelected = null;
                this.$emit('cardexit');
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
    <section class="flex-cards">
        <Transition>
            <div v-if="cardSelected != null" class="fullscreen-card-display" id="selected-card-display">
                <div v-if="cardSelected" @click.stop="handleExit()" class="exit-button"><i class="material-icons">close</i></div>
                <h1 class="f-title">
                    {{ cardSelected.title }}
                </h1>
                <p class="f-body">
                    {{ cardSelected.body }}
                </p>
            </div>
        </Transition>
        <div id="flex-card-container" class="flex-card-container" :style="style">
            <div class="card" v-for="card in cards" :id ="'card' + card.id" :class="{ selected: card.isSelected, focused: card.isFocused, unfocused: !card.isFocused }" @mouseenter="handleFocus(card)" @mouseleave="handleUnfocus(card)" @click="handleClick(card)">
                <div class="card-content">
                    <h2>
                        {{ card.title }}
                    </h2>
                    <p>
                        {{ card.body }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.f-title {
    color: antiquewhite;
    font-size: 46px;
}

.f-body {
    color: antiquewhite;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 300ms cubic-bezier(0.1, 0.4, 0.12, 1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
    

.card-enter-active,
.card-leave-active {
    transition: border-radius 300ms cubic-bezier(0.1, 0.4, 0.12, 1), top 300ms cubic-bezier(0.1, 0.4, 0.12, 1), bottom 300ms cubic-bezier(0.1, 0.4, 0.12, 1), right 300ms cubic-bezier(0.1, 0.4, 0.12, 1), left 300ms cubic-bezier(0.1, 0.4, 0.12, 1);
}

.card-enter-from,
.card-leave-to {
    top:0;
    bottom:0;
    right:0;
    left:0;
}

.fullscreen-card-display {
    position:fixed;
    top:calc(4vmin + 1px);
    left:calc(4vmin + 1px);
    bottom: calc(4vmin + 1px);
    right: calc(4vmin + 1px);
    background-color: #292929; 
    padding: 4vmin;
    z-index: 10000;
}

.exit-button {
    position:absolute;
    width: 10px;
    z-index: 20;
    height: 10px;
    top: 4vmin;
    right: 4vmin;
    transform: translate3d(-70%, -50%, 0);
    color: antiquewhite;
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
    padding-right:8vmin;
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
    border-radius:2vmin;
}

.card-content {
    padding: 3vmin;
}

.card:hover {
    transform:scale(1.02);
    transition: transform 300ms;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.12, 1);
}
</style>