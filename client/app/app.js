import angular from 'angular';
import appComponent from './app.component';
import categoriesComponent from './categories/categories';
import bookmarksComponent from './bookmarks/bookmarks';

import categoriesService from './services/Categories';
import bookmarksService from './services/Bookmarks';

angular.module('app', [])
  .service('Categories', categoriesService)
  .service('Bookmarks', bookmarksService)

  .component('app', appComponent)
  .component('categories', categoriesComponent)
  .component('bookmarks', bookmarksComponent)


// TODO:
// 1. don't break gulp process on errors
// 2. hot-reload (css at least)