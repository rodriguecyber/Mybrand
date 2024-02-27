const multer = require("multer");
const path=require("path")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/portfolio');
  },
  filename: (req, file, cb) => {
const extension=path.extname(file.originalname)
    cb(null,  'project2' + extension);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
