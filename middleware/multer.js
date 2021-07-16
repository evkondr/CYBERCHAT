const multer = require('multer')
const path = require('path')

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/"+req.user.id);
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    if(ext === ".png" || ext === ".jpg"|| ext === ".jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}
module.exports = multer({storage: storageConfig, fileFilter})