const {
  getImageList,
  saveAnnotations,
  runFeed,
  liveStream,
  deleteAnnotations,
  deleteAllFiles,
} = require("../controllers/images");
const upload = require("../middleware/upload");
const { Router } = require("express");
const router = Router();

router.get("/list", getImageList);
router.post("/save_annotations", upload.single("annotations"), saveAnnotations);
router.get("/run_feed", runFeed);
// router.get("/live_stream", liveStream);
router.get("/delete_annotations", deleteAnnotations);
router.get("/delete_all_files", deleteAllFiles);
module.exports = router;
