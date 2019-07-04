<template lang="pug">
  div.loader-screen
    //- .loader
    //-   div
    //-   div
    //-   div
    .loader-screen__logo-container
      .loader-screen__logo
        iit-icon-base(width="150" height="120" viewBox="0 0 100 80" iconColor="#00ac67" icon-name="")
          iit-icon-logo
      .loader-screen__progress-bar
      .loader-screen__text
        slot {{ text }}
</template>

<script>
export default {
  props: ["text"]
};
</script>

 <style lang="sass">
 @keyframes zoom-fade
  to
    opacity: 0
    // transform: translate3d(10px, 10px, 10px) scale(0.8)
    transform: scale(0.8)

 .loader-screen
  // height: 100%
  // width: 100%
  // position: fixed
  // left: 0
  // top: 0
  z-index: 2
  position: relative
  @media (min-width: 0px)
    min-height: 700px

  &__logo-container
    position: absolute
    top: 50%
    left: 45%
    margin: -50px 0 0 -50px

  &__logo
    display: flex
    justify-content: center
    svg
      animation: zoom-fade  ease-out .75s infinite alternate

  &__text
    margin-top: 8px
    font-size: 20px
 </style>
