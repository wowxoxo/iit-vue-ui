<template lang="pug">
  label
    | {{ label }}
    input(
      :value="value"
      @input="$emit('input', $event.target.value)"
    )
    //- v-on="inputListeners"
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["value", "label"]
  // computed: {
  //   inputListeners: function() {
  //     var vm = this;
  //     // Object.assign for create new object
  //     return Object.assign({},
  //     // add all listeners from parent
  //     this.$listeners,
  //     // rewrite parent listener:
  //     {
  //       // v-model
  //       input: function (event) {
  //         vm.$emit('input', event.target.value)
  //       }
  //     }
  //     )
  //   }
  // }
};
</script>
