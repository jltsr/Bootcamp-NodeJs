import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.RegCtrl.findAll);
router.get("/:id", indexCtrl.RegCtrl.findOne);
router.post("/", indexCtrl.RegCtrl.create);
router.post(
  "/next/",
  indexCtrl.RegCtrl.createNext,
  indexCtrl.CountryCtrl.create
);
router.put("/:id", indexCtrl.RegCtrl.update);
router.delete("/:id", indexCtrl.RegCtrl.deleted);
router.post("/sql/", indexCtrl.RegCtrl.querySQL);

export default router;