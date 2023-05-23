<template>
    <a
        class="tel"
        :href="`tel:+${numbersOfPhone}`"
    >
        {{ phoneNumber }}
    </a>
</template>

<script>
export default {
    props: {
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    computed: {
        numbersOfPhone() {
            const string = this.phoneNumber
            const digitsArray = string.match(/\d+/g)
            const numbers = digitsArray.join("")
            return numbers
        },
    },
}
</script>

<style lang="scss">
.tel {
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
}
</style>
