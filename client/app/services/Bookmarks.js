class Bookmarks {
  constructor() {
    this.init();
  }

  init() {
    this.selectedItem = null;

    this.items = [
      {id: 0, title: 'design 1', category: 'Design'},
      {id: 1, title: 'design 2', category: 'Design'},
      {id: 1, title: 'dev 1', category: 'Development'}
    ]

  }

  getAll() {
    return this.items;
  }

}

export default Bookmarks;