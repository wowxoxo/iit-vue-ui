import Vue from "vue";
// import upperFirst from "lodash/upperFirst";
// import camelCase from "lodash/camelCase";
import eventBus from "@/helpers/eventBus";
import IitCheckbox from "./IitCheckbox.vue";

// const requireComponent = require.context(".", false, /Iit[\w-]+.vue$/);

// requireComponent.keys().forEach(filename => {
//   // Get Component Config
//   const componentConfig = requireComponent(filename);

//   // Get PascalCase name of component
//   const componentName = upperFirst(
//     camelCase(filename.replace(/^\.\//, "").replace(/\.\w+$/, ""))
//   );

//   Vue.component(componentName, componentConfig.default || componentConfig);
// });

const Components = {
  IitCheckbox
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default eventBus;
