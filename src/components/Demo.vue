<template lang="pug">
  .demo
    h1.demo__title {{ msg }}
    iit-checkbox(label-size="small") test label
    IitAnimatedNumber(:number="number")
    button(@click="changeNum") changeNum
    IitLoader Пожалуйста, подождите...
    IitErrorScreen
      template(slot="icon")
        iit-icon-base(width="78" height="102" viewBox="0 0 26 34" iconColor="#e01851" icon-name="")
            iit-icon-sad
      p Некорректные данные заказа. Работа приложения не может быть продолжена.

    IitLoaderSpinner Пожалуйста, обождите

</template>

<script>
import IitCheckbox from "./IitCheckbox.vue";
import IitLoader from "./IitLoader.vue";
import IitErrorScreen from "@/components/screens/IitErrorScreen.vue";
import IitAnimatedNumber from "@/components/IitAnimatedNumber.vue";
import IitLoaderSpinner from "./IitLoaderSpinner.vue";
export default {
  name: "Demo",
  props: {
    msg: String
  },
  data() {
    return {
      checked: true,
      test: "hello",
      number: 1000
    };
  },
  methods: {
    onFocus() {
      alert("onFocus!");
    },
    changeNum() {
      this.number += 1234;
    }
  },
  components: {
    IitCheckbox,
    IitLoader,
    IitErrorScreen,
    IitAnimatedNumber,
    IitLoaderSpinner
  }
};
</script>

<style lang="sass">
.demo
  text-align: left
  &__title
    text-align: center
</style>
