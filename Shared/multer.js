const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, "./Public");
  },
  filename: (req, file, callback) => {
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + file.originalname
    );
  },
});

const uploads = multer({ storage: storage });

module.exports = { uploads };
