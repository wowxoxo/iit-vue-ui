<template lang="pug">
  .demo
    h1.demo__title {{ msg }}
    iit-checkbox(label-size="small" v-model="checked") test label
    iit-input(v-model="test" label="test label" v-on:focus="onFocus")
</template>

<script>
import iitCheckbox from "./iitCheckbox.vue";
import iitInput from "./iitInput.vue";
export default {
  name: "Demo",
  props: {
    msg: String
  },
  data() {
    return {
      checked: true,
      test: "hello"
    };
  },
  methods: {
    onFocus() {
      alert("onFocus!");
    }
  },
  components: {
    iitCheckbox,
    iitInput
  }
};
</script>

<style lang="sass">
  .demo
    text-align: left
    &__title
      text-align: center
</style>
