class Categories {
  constructor() {
    this.init();
  }

  init() {
    this.selectedItem = null;

    this.items = [
      {id: 0, title: 'Design'},
      {id: 1, title: 'Development'},
      {id: 2, title: 'Humour'}
    ]

  }

  getAll() {
    return this.items;
  }

  select(item) {
    this.selectedItem = item;
  }

  getSelected() {
    return this.selectedItem;
  }
}

export default Categories;