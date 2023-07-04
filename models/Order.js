const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const testSchema = new mongoose.Schema({
  test_id: String,
  test_note: String,
  is_urgent: Boolean,
  order_id: ObjectId,
});

const orderSchema = new mongoose.Schema(
  {
    facility_code: String,
    visit_id: String,
    order_status: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    client_mrn: String,
    client_sex: String,
    department: String,
    location_id: String,
    birthdate: String,
    order_id: String,
    ordered_on: BigInt,
    ordered_by: String,
    tests: [testSchema],
  },
  { collection: "tester" }
);

module.exports = mongoose.model("Order", orderSchema, "Orders");
