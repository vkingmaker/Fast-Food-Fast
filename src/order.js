import mock from './mock/db';
let db = mock();

export default {
  getOrder(req, res, next) {
    return res.json(db);
  },
  getOrderById(req, res, next) {
    let particularOrder = db.filter((value) => {
      if (value.id === +req.params.id)
        return value;
    });
    res.json(particularOrder);
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
  },
  updateById(req, res, next) {
    let updatedOrder = {};
    db.splice(req.params.id - 1, 1, req.body);
    updatedOrder = req.body;
    res.json({
      "message": `Your Order has been Updated id ${req.params.id}`,
      updatedOrder
    });
  },
  removeById(req, res, next) {
    db.splice(req.params.id - 1, 1);
    res.json({
      "message": `Order Deleted Successfully id ${req.params.id}`
    });
  }
}
