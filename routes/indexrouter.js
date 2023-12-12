const express = require('express');
const app = express();
const router = express.Router();
const {updatecontroller,
    indexcontroller, 
    userscontroller ,
    deletecontroller,
    insertcontroller,
    updategetcontroller} = require('../controllers/indexcontroller')



router.get("/", indexcontroller);
router.get("/users", userscontroller);
router.get("/delete/:id", deletecontroller);
router.post("/insert", insertcontroller);
router.get("/update/:id", updategetcontroller);
router.post("/update", updatecontroller);


module.exports=router;