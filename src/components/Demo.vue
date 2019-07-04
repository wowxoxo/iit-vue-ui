<template lang="pug">
  .demo
    h1.demo__title {{ msg }}
    iit-checkbox(label-size="small") test label
    IitLoader Пожалуйста, подождите...
    IitErrorScreen
      template(slot="icon")
        iit-icon-base(width="78" height="102" viewBox="0 0 26 34" iconColor="#e01851" icon-name="")
            iit-icon-sad
      p Некорректные данные заказа. Работа приложения не может быть продолжена.

</template>

<script>
import IitCheckbox from "./IitCheckbox.vue";
import IitLoader from "./IitLoader.vue";
import IitErrorScreen from "@/components/screens/IitErrorScreen.vue";
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
    IitCheckbox,
    IitLoader,
    IitErrorScreen
  }
};
</script>

<style lang="sass">
  .demo
    text-align: left
    &__title
      text-align: center
</style>
