class Categories {
  constructor() {
    this.init();
  }

  init() {
    this.selectedCategory = null;

    this.items = [
      {id: 0, title: 'hoho'},
      {id: 1, title: 'waaaa'}
    ]

  }

  getItems() {
    return this.items;
  }

  select(category) {
    this.selectedCategory = category;
    console.log('yooo!');
  }
}

export default Categories;