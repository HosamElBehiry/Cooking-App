const fs = require("fs");
const Reciep = require("../../Model/Reciep");
const { dE, dSuc } = require("../../Shared/response");

const deleteById = async (req, res) => {
  try {
    const reciep = await Reciep.findById(req.params.id);
    await fs.unlink(`./${reciep.image}`, async (err) => {
      if (err) {
        dE(res, err);
      } else {
        await Reciep.findByIdAndDelete(req.params.id);
        dSuc(res, "Successfully Deleted !");
      }
    });
  } catch (error) {
    dE(res, "Error from Server !");
  }
};

module.exports = { deleteById };
