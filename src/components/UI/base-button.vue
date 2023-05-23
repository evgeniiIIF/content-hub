<template>
    <component :class="classes" :is="tag">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: "button",
        },
    },

    computed: {
        classes() {
            return ["base-button"]
        },
    },
}
</script>

<style lang="scss">
.base-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 32px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;
    background: #c6af66;
    border: 2px solid #c6af66;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .button-with-icon__text {
        margin-right: 16px;
    }
}
</style>
