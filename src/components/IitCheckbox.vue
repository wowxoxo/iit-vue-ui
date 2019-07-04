<template lang="pug">
  label.checkbox.checkbox__box
    div(:class="labelClass")
      slot {{ label }}
    input(
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
      @change="$emit('iit-checkbox-change', $event.target.checked)"
      )
    .checkbox__indicator

</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "iit-checkbox-change"
  },
  props: {
    value: {
      type: [Array, Object, Boolean, String],
      default: "value"
    },
    name: {
      type: String,
      default: "name"
    },
    checked: Boolean,
    label: {
      type: String,
      default: "label"
    },
    labelSize: {
      type: String,
      default: "default"
    }
  },
  computed: {
    labelClass() {
      if (this.labelSize == "small") {
        return "checkbox__label_small";
      } else {
        return "checkbox__label";
      }
    }
  }
};
</script>

<style lang="sass">
  .checkbox
    @include radius()
    display: block
    position: relative
    padding-left: 4.25 * $base-indent
    margin-bottom: 2 * $base-indent
    padding-top: 0.5 * $base-indent
    cursor: pointer
    font-size: $fsize-small
    @include transition()

  .checkbox + .checkbox
    margin-left: 4 * $base-indent

  .checkbox input
    position: absolute
    z-index: -1
    opacity: 0
    left: -10000px

  .checkbox__indicator
    position: absolute
    top: 2px
    left: 0
    height: 2.5 * $base-indent
    width: 2.5 * $base-indent
    background: $color-white
    @extend .border
    border-color: $color-gray-light-2
    @include transition()

  .checkbox_error
    .checkbox__indicator
        @extend .border
        border-color: $color-pink


  .checkbox:hover input ~ .checkbox__indicator,
  .checkbox input:focus ~ .checkbox__indicator
    @extend .border
    border-color: $color-primary

  .checkbox_error:hover input ~ .checkbox__indicator,
  .checkbox_error input:focus ~ .checkbox__indicator
    @extend .border
    border-color: $color-primary

  .checkbox_error
    color: $color-pink


  .checkbox input:checked ~ .checkbox__indicator
    background: $color-primary

  .checkbox:hover input:not([disabled]):checked ~ .checkbox__indicator,
  .checkbox input:checked:focus ~ .checkbox__indicator
    background: $color-primary-active

  .checkbox input:disabled ~ .checkbox__indicator
    background: $color-gray-light-2
    @include opacity
    pointer-events: none
    @extend .border
    border-color: $color-gray-light-2

  .checkbox__indicator:after
    box-sizing: unset
    content: ''
    position: absolute
    display: none

  .checkbox input:checked ~ .checkbox__indicator:after
    display: block

  .checkbox__box .checkbox__indicator:after
    left: 7px
    top: 3px
    width: 3px
    height: $base-indent
    border: solid $color-white
    border-width: 0 2px 2px 0
    transform: rotate(45deg)

  .checkbox__box input:disabled ~ .checkbox__indicator:after
    border-color: $color-dark

  .checkbox__label_small
    @extend .small-text

</style>
