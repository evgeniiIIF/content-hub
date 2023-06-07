<template>
    <label class="base-radio" :class="variant === currentPicked ? 'base-radio--active' : ''">
        <input class="base-radio__input" type="radio" :value="variant" :name="name"
            @change="$emit('changePicked', variant)">
        <span class="base-radio__flag">
            <span class="base-radio__flag-inner"></span>
        </span>
        <span class="base-radio__title">{{ variant }}</span>
    </label>
</template>

<script>
export default {
    name: 'base-radio',
    props: {
        name: {
            type: String,
        },
        variant: {
            type: String
        },
        currentPicked: {
            type: String
        }
    },
    methods: {

    }
}
</script>

<style lang='scss'>
.base-radio {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 32px 12px 12px;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 4px;
    background: #FFFFFF;

    &__input {
        opacity: 0;
        position: absolute;
        z-index: -1;
    }


    &__title {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #63636F;
    }



    &__flag {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        border: 2px solid #DADADA;
    }

    &__flag-inner {
        opacity: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #C6AF66;
    }

}

.base-radio.base-radio--active {
    box-shadow: 0px 8px 16px rgba(34, 35, 36, 0.1);
    border-color: #C6AF66;

    .base-radio__title {
        color: #000000;
    }

    .base-radio__flag {
        border-color: #C6AF66;
    }

    .base-radio__flag-inner {
        opacity: 1;

    }
}
</style>