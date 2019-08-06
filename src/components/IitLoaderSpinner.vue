<template lang="pug">
  div.loader-spinner
    .loader-spinner__text(v-if="this.$slots.default")
        slot

    .loader-spinner__shapes
      .loader-spinner__item.loader-spinner__item_1
      .loader-spinner__item.loader-spinner__item_2
      .loader-spinner__item.loader-spinner__item_3
</template>

<style lang="sass">
.loader-spinner

  position: relative
  .loader-spinner__item
    width: 18px
    height: 18px
    background-color: $color-primary
    border-radius: 100%
    display: inline-block
    animation: sk-bouncedelay 1.4s infinite ease-in-out both

  .loader-spinner__item_1
    animation-delay: -0.32s

  .loader-spinner__item_2
    animation-delay: -0.16s

.loader-spinner__text
  // position: absolute
  width: 100%
  // top: -40px
  text-align: center
  margin-top: 72px
  font-size: 20px
  line-height: 1.25

.loader-spinner__shapes
  width: 70px
  margin: 0 auto
  margin-top: 125px
  text-align: center

.loader-spinner__text + .loader-spinner__shapes
  margin-top: 28px


@keyframes sk-bouncedelay
  0%, 80%, 100%
    transform: scale(0)

  40%
    transform: scale(1)
</style>
