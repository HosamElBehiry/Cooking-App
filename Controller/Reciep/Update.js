const Reciep = require("../../Model/Reciep");
const { dE, dSuc } = require("../../Shared/response");

const updateById = async (req, res) => {
  try {
    const { image, title, reciep, ingredient } = req.body;
    await Reciep.findByIdAndUpdate(req.params.id, {
      $set: {
        image: req.file ? req.file.path : image,
        title,
        reciep,
        ingredient,
      },
    });
    dSuc(res, "Successfully Updated !");
  } catch (error) {
    dE(res, "Error From Server ");
  }
};

module.exports = { updateById };
