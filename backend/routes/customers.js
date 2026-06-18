const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer")

//GET: LIST
router.get('/', async (req, res) => {

    try {
        const customer = await Customer.find();
        res.status(200).json(customer);
    } catch (e) {
        res.status(200).json({ message: "An error occurred" });
    }

})


//GET: LIST BY ID
router.get('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const customer = await Customer.findOne({_id:id});
        res.status(200).json(customer);
    } catch (e) {
        res.status(200).json({ message: "An error occurred" });
    }

})

//POST: LIST
router.post('/', async (req, res) => {

    try {
        const customer = new Customer(req.body);
        const savedcustomer = customer.save();
        res.status(200).json(savedcustomer);
    } catch (e) {
        res.status(200).json({ message: "An error occurred" });
    }

})

//PUT: LIST
router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedCustomer);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "An error occurred" });
  }
});
//delete: LIST
router.delete('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const deletedcustomer = Customer.deleteOne({_id:id});
        res.status(200).json(deletedcustomer);
    } catch (e) {
        res.status(200).json({ message: "An error occurred" });
    }

})

module.exports = router;