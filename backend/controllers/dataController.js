const asyncHandler = require("express-async-handler");
const Data = require("../models/dataModel");

const getData = asyncHandler(async (req, res) => {
  const data = await Data.find({});
  res.json(data);
});

const addData = asyncHandler(async (req, res) => {
  const { name, phonenumber, email, hobbies } = req.body;

  if (!name || !phonenumber || !email || !hobbies) {
    res.status(400);
    throw new Error("PLEASE FILL ALL FIELDS");
  } else {
    const data = await Data.create({
      name,
      phonenumber,
      email,
      hobbies,
    });
    res.status(201).json(data);
  }
});

const updateData = asyncHandler(async (req, res) => {
  const { name, phonenumber, email, hobbies } = req.body;
  const data = await Data.findById(req.params.id);
  if (data) {
    data.name = name;
    data.phonenumber = phonenumber;
    data.email = email;
    data.hobbies = hobbies;

    const dataUpdate = await data.save();
    res.json(dataUpdate);
  } else {
    res.status(404);
    throw new Error("DATA NOT FOUND");
  }
});

const deleteData = asyncHandler(async (req, res) => {
  const data = await Data.findById(req.params.id);

  if (data) {
    await data.remove();
    res.json({ message: "PRODUCT DELETED" });
  } else {
    res.status(404);
    throw new Error("PRODUCT NOT FOUND");
  }
});

module.exports = {
  getData,
  addData,
  updateData,
  deleteData,
};
