import template from './categories.html';
import './categories.scss';

class CategoriesCtrl {
  constructor(Categories) {
    'ngInject';
    this.Categories = Categories;
  }

  $onInit() {
    this.items = this.Categories.getAll();
  }

  select(item) {
    this.Categories.select(item);
  }
}

const Categories = {
  template,
  controller: CategoriesCtrl
};

export default Categories;