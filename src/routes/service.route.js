import { Router } from "express";
import { addService, deleteService, getServices, updateServices } from "../controllers/service.controller.js";
import { serviceValidationRules, updateserviceValidationRules, validate } from "../middleware/serviceValidate.js";

const router = Router()

router.route("/addservice").post(serviceValidationRules,validate,addService)
router.route("/getservice").get(getServices)
router.route("/updateservice/:serviceId").put(updateserviceValidationRules,validate,updateServices)
router.route("/deleteservice/:serviceId").delete(deleteService)

export default router