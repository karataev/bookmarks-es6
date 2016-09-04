import angular from 'angular';
import appComponent from './app.component';
import categoriesComponent from './categories/categories';
import categoriesService from './services/Categories';

angular.module('app', [])
  .service('Categories', categoriesService)

  .component('app', appComponent)
  .component('categories', categoriesComponent)
