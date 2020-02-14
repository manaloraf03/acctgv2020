require('./bootstrap');
require('select2');
window.Vue = require('vue');

// IMPORTS
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FormMixin from './mixins/FormMixin'
import VueRouter from 'vue-router'
import axios from 'axios'
import Notifications from 'vue-notification'
import "select2/dist/css/select2.css";
import "select2-bootstrap4-theme/dist/select2-bootstrap4.css";

// USE
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.mixin(FormMixin)
Vue.use(Notifications)

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
const axiosConfig = {
  baseURL: 'http://accountingstandard2020.test',
  timeout: 30000
}
Vue.prototype.$http = axios.create(axiosConfig)

// VUE COMPONENTS REGISTRATION
// Vue.component('articles', require('./components/Articles.vue').default);
Vue.component('vue-autonumeric', require('vue-autonumeric'))
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('select2', require('./select2/Select2.vue').default);
// Vue.component('treesview', require('./components/References/TreeViews.vue').default);
// Vue.component('banks', require('./components/References/Banks.vue').default);
// Vue.component('accountclasses', require('./components/References/AccountClasses.vue').default);
// Vue.component('brands', require('./components/References/Brands.vue').default);
// Vue.component('departments', require('./components/References/Departments.vue').default);
// Vue.component('categories', require('./components/References/Categories.vue').default);
// Vue.component('locations', require('./components/References/Locations.vue').default);
// Vue.component('units', require('./components/References/Units.vue').default);

// MASTERFILES
// Vue.component('products', require('./components/Masterfiles/Products.vue').default);
// Vue.component('suppliers', require('./components/Masterfiles/Suppliers.vue').default);
// Vue.component('customers', require('./components/Masterfiles/Customers.vue').default);
Vue.component('salespersons', require('./components/Masterfiles/Salespersons.vue').default);
// Vue.component('accounttitles', require('./components/References/AccountTitles.vue').default);


// APP
const app = new Vue({
    el: '#app',
});