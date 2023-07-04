const Order = require("../models/Order");

BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

async function list(_req, res, next) {
  try {
    const orders = await Order.find();
    res.status(200).json({ status: 200, success: true, message: orders });
  } catch (error) {
    console.log(error);
  }
}

async function save(req, res, next) {
  try {
    const { tests, ...bodyOrder } = req.body;
    const newOrder = new Order({
      ...bodyOrder,
      tests: tests.map((test) => ({
        ...test,
      })),
    });
    const order = await newOrder.save();
    res.status(201).json({ status: 201, success: true, message: order });
  } catch (error) {
    console.log(error);
  }
}

async function search(req, res, next) {
  try {
    const id = req.body.id ? req.body.id : req.params.id;
    const order = await Order.findById(id);
    if (order == null) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }
    res.status(200).json({ status: 200, success: true, message: order });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { list, save, search };
