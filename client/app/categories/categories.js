import template from './categories.html';

class CategoriesCtrl {
  constructor(Categories) {
    'ngInject';
    this.Categories = Categories;
  }

  $onInit() {
    this.items = this.Categories.getItems();
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