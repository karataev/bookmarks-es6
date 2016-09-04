class Categories {
  constructor() {
    this.init();
  }

  init() {
    this.selectedCategory = null;

    this.items = [
      {id: 0, title: 'Design'},
      {id: 1, title: 'Development'},
      {id: 2, title: 'Humour'}
    ]

  }

  getAll() {
    return this.items;
  }

  select(category) {
    this.selectedCategory = category;
  }

  getSelected() {
    return this.selectedCategory;
  }
}

export default Categories;