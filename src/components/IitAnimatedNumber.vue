<template lang="pug">
  span(v-html="$options.filters.currency(displayNumber)")
</template>

<script>
export default {
  props: {
    number: { default: 0 }
  },
  data() {
    return {
      displayNumber: this.number,
      interval: false
    };
  },
  ready() {
    this.displayNumber = this.number ? this.number : 0;
  },
  watch: {
    number: function() {
      clearInterval(this.interval);

      if (this.number == this.displayNumber) {
        return;
      }

      this.interval = window.setInterval(
        function() {
          if (this.displayNumber != this.number) {
            // var change = (this.number - this.displayNumber) / 10;
            var change = (this.number - this.displayNumber) / 5;

            change = change >= 0 ? Math.ceil(change) : Math.floor(change);

            this.displayNumber = this.displayNumber + change;
          }
        }.bind(this),
        20
      );
    }
  }
};
</script>
