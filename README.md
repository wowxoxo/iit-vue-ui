# @iit/vue-ui
[![GitHub version](https://badge.fury.io/gh/boennemann%2Fbadges.svg)](http://badge.fury.io/gh/boennemann%2Fbadges)
It's just a library with some custom Vue components.

## Installation and Usage
1. Install package:
    ```
    npm install @iit/vue-ui -S
    ```
2. Include the scripts by using following snippet:
    ```
    import IitComponents from "@iit/vue-ui";

    Object.keys(IitComponents).forEach(name => {
        Vue.component(name, IitComponents[name]);
    });
    ```

## List of components:

All components are registered with the Vue global and are available for use. You don't need to re-register them.

List is empty now.
