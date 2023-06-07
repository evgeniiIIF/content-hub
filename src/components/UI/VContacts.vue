<template>
  <div class="logo">
    <div class="logo__body">
      <div class="logo__image">
        <picture>
          <source
            media="(min-width: 991px)"
            srcset="@/assets/img/logo/Logo.svg"
          />
          <source
            media="(max-width: 992px)"
            srcset="@/assets/img/logo/Logo_small.svg"
          />
          <img
            src="@/assets/img/logo/Logo.svg"
            alt="image"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .logo {
    &__body {
    }
    &__image {
    }
  }
</style>
