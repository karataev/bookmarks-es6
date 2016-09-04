import template from './bookmarks.html';
import './bookmarks.scss';

class BookmarksCtrl {
  constructor(Bookmarks, Categories, $scope) {
    'ngInject';
    this.Bookmarks = Bookmarks;
    this.Categories = Categories;
    this.$scope = $scope;
  }

  $onInit() {
    //this.bookmarks = this.Bookmarks.getAll();
    this.$scope.$watch(() => this.Categories.getSelected(), newVal => {
      if (!newVal) {
        this.bookmarks = null;
        return;
      }

      let categoryTitle = newVal.title;
      this.bookmarks = this.Bookmarks.getAll().filter(x => x.category === categoryTitle);
    })
  }
}

const Bookmarks = {
  template,
  controller: BookmarksCtrl
};

export default Bookmarks;