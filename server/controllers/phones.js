const Phone = require("../models/phones");

exports.getAllPhones = async (req, res) => {
  try {
    const result = await Phone.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Phones found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Phones not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPhoneById = async (req, res) => {
  try {
    const result = await Phone.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Phone found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Phone not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deletePhone = async (req, res) => {
  try {
    const result = await Phone.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Phone deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePhone = async (req, res) => {
  try {
    const data = {
      nname: req.body.name,
      brand: req.body.brand,
      ram: req.body.ram,
      cpu: req.body.cpu,
      display: req.body.display,
      price: req.body.price,
    };
    const result = await Phone.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Phone updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phone was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createPhone = async (req, res) => {
  try {
    const data = new Phone({
      name: req.body.name,
      brand: req.body.brand,
      ram: req.body.ram,
      cpu: req.body.cpu,
      display: req.body.display,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Phone created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Phone was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
