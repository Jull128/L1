let book = {
  title: "Dandelion Wine",
  author: "Ray Bradbury",
  year: 1957,

  getAll() {
    // "this" - это "текущий объект".
    return `Название:${this.title}, Автор:${this.author}, Год:${this.year}`;
  },

  get fullName() {
    return this.getAll();
  },

  set fullName(value) {
    [this.title, this.author, this.year] = value.split(",");
  },
};

book.getAll();
book.fullName = "Dandelion, Ray, 1957";
