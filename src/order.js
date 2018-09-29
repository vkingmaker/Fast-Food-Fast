import mock from './mock/db';
let db = mock();

export default {
  getOrder: (req, res) => {
    if (db)
      res.statusCode = 200;
    return res.json(db);
  }
}
