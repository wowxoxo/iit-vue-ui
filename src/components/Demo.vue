<template lang="pug">
  .demo
    h1.demo__title {{ msg }}
    iit-checkbox(label-size="small") test label

</template>

<script>
import IitCheckbox from "./IitCheckbox.vue";
export default {
  name: "Demo",
  props: {
    msg: String
  },
  components: {
    IitCheckbox
  }
};
</script>

<style lang="sass">
  .demo
    text-align: left
    &__title
      text-align: center
</style>
