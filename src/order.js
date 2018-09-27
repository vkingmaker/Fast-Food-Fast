import mock from './mock/db';
let db = mock();

export default {
  getOrder(req, res, next) {
    return res.json(db);
  },
  placeOrder(req, res, next) {
    let addedOrder = {};
    if (db.length) {
      req.body.id = db[db.length - 1].id + 1;
      addedOrder = req.body;
      db.push(req.body);
    } else {
      req.body.id = 1;
      addedOrder = req.body;
      db.push(req.body);
    }

    res.json({
      "message": "Your order has been placed!",
      addedOrder
    });
  }
}
