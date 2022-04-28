const router = require("express").Router();
const AddReciepCont = require("../Controller/Reciep/Add");
const DltReciepCont = require("../Controller/Reciep/Delete");
const UpdReciepCont = require("../Controller/Reciep/Update");
const FindReciepCont = require("../Controller/Reciep/Find");
const { uploads } = require("../Shared/multer");

router.post("/", uploads.single("image"), AddReciepCont.addNew);
router.get("/", FindReciepCont.findAll);
router.get("/:id", FindReciepCont.findById);
router.put("/:id", uploads.single("image"), UpdReciepCont.updateById);
router.delete("/:id", DltReciepCont.deleteById);

module.exports = router;
