<template>
    <div
        class="header__burger burger-icon"
        @click="onShowMobileMenu"
    >
        <div class="burger-icon__wrapper">
            <div class="burger-icon__body">
                <span class="burger-icon__item burger-icon__item--top"></span>
                <span
                    class="burger-icon__item burger-icon__item--middle"
                ></span>
                <span
                    class="burger-icon__item burger-icon__item--bottom"
                ></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onShowMobileMenu() {
            this.$parent.$emit("onShowMobileMenu")
        },
    },
}
</script>
<style lang="scss">
.burger-icon {
    cursor: pointer;
    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
    }

    &__body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        width: 16px;
        height: 12px;
    }

    &__item {
        display: block;
        width: 100%;
        height: 2px;
        background: #fff;
        border-radius: 1px;
    }

    &__item--top {
        width: 60%;
    }

    &__item--middle {
    }

    &__item--bottom {
        width: 60%;
    }
}
</style>
