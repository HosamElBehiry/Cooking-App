const fs = require("fs");
const Reciep = require("../../Model/Reciep");
const { dE, dCre } = require("../../Shared/response");

const addNew = async (req, res) => {
  try {
    await fs.rename(
      req.file.path,
      `Public/Recieps/${req.file.path.split("/")[1]}`,
      async () => {
        const { title, reciep, ingredient } = req.body;
        const newReciep = await new Reciep({
          image: `Public/Recieps/${req.file.path.split("/")[1]}`,
          title,
          reciep,
          ingredient,
        }).save();
        dCre(res, newReciep);
      }
    );
  } catch (error) {
    dE(res, "Error from server ");
  }
};

module.exports = { addNew };
