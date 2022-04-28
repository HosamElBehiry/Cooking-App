const Reciep = require("../../Model/Reciep");
const { dE, dSuc } = require("../../Shared/response");

const findAll = async (req, res) => {
  try {
    const all = await Reciep.find();
    dSuc(res, all);
  } catch (error) {
    dE(res, "Error from Server !");
  }
};

const findById = async (req, res) => {
  try {
    const reciep = await Reciep.findById(req.params.id);
    dSuc(res, reciep);
  } catch (error) {
    dE(res, "Error from Server !");
  }
};

module.exports = { findAll, findById };
