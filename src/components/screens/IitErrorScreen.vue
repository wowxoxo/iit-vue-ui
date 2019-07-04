<template lang="pug">
  include ../../mixins/bem
  +b.error-screen
    +e.icon
      slot(name="icon")

    +e.title {{ title }}

    +e.text
      slot

    +e.text-simple
      slot(name="text-simple")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Ошибка!"
    }
  }
};
</script>

<style lang="sass">
$base-indent: 8px
$fsize-h2: 40px
.error-screen
  margin-top: 10 * $base-indent
  margin-bottom: 5 * $base-indent
  display: flex
  flex-direction: column
  justify-content: center

  &__icon
    margin-bottom: 2 * $base-indent
    display: flex
    justify-content: center

  &__title
    font-size: $fsize-h2
    margin-bottom: 1 * $base-indent
    display: flex
    justify-content: center
    text-align: center

  &__text
    display: flex
    justify-content: center
    text-align: center

    &-simple
      flex-direction: column
      justify-content: flex-start

      p
        margin-bottom: 0

  &__button
    display: flex
    justify-content: center
    margin-top: 2 * $base-indent
</style>
