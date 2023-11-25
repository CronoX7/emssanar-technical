const { Router } = require("express");
const {readAll, create, update, remove} = require ("../controllers/softwaresController")

const router = Router();

router.get ("/",readAll);
router.post ("/",create);
router.put ("/:id",update);
router.delete ("/:id",remove);

module.exports = router;
