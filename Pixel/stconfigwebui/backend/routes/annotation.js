const { getAnnotationList, saveAnnotations } = require("../controllers/annotation");
const upload = require("../middleware/upload");
const { Router } = require("express");
const router = Router();

router.get("/list", getAnnotationList);
router.post("/save_labels", upload.single("labels"), saveAnnotations);

module.exports = router;
