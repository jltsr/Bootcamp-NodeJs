import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.LocationCtrl.findAll);
router.get("/:id", indexCtrl.LocationCtrl.findOne);
router.post("/", indexCtrl.LocationCtrl.create);
router.put("/:id", indexCtrl.LocationCtrl.update);
router.delete("/:id", indexCtrl.LocationCtrl.deleted);
router.delete("/sql/:id", indexCtrl.LocationCtrl.querySQL);

export default router;
