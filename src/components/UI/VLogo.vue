<template>
  <!-- <a
    class="logo"
    @click.prevent="goToAnchorFromHeaderLogo"
  > -->

  <RouterLink to="/">
    <div class="logo__body">
      <div class="logo__image">
        <img
          src="@/assets/img/logo/Logo.svg"
          alt="image"
        />
      </div>
    </div>
  </RouterLink>
  <!-- </a> -->
</template>

<script>
  export default {
    methods: {
      goToAnchorFromHeaderLogo() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  };
</script>

<style lang="scss">
  .logo {
    &__body {
    }

    &__image {
    }
  }
</style>
