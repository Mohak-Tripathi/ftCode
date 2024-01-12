const upload = require("../middleware/upload");
const { saveConfiguration } = require("../controllers/config");
const { Router } = require("express");
const router = Router();

router.post("/save_configuration", upload.single("annotations"), saveConfiguration);

module.exports = router;
