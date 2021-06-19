const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

class Order {
  constructor() {
    this.path = `${__dirname}/order.json`;
    this.setup();
  }

  async setup() {
    const adapter = new FileSync(this.path);
    this.db = lowdb(adapter);
    this.db.defaults({ cart: [], userInfo: [] }).write();
  }

  get(key) {
    return this.db.get(key);
  }
}

module.exports = {
  order: new Order(),
};
