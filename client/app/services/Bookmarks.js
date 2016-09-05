class Bookmarks {
  constructor() {
    this.init();
  }

  init() {
    this.selectedItem = null;

    this.items = [
      {id: 0, title: 'design 1', category: 'Design', link: 'http://google.com'},
      {id: 1, title: 'design 2', category: 'Design', link: 'http://google.com'},
      {id: 2, title: 'dev 1', category: 'Development', link: 'http://google.com'}
    ]

  }

  getAll() {
    return this.items;
  }

}

export default Bookmarks;