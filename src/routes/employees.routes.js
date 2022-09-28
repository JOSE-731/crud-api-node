import {Router} from 'express';
import { getEmpleados, createEmpleados, deleteEmpleados, editEmpleados } from '../controllers/employess.controller.js';
const router = Router();

router.get("/empleados", getEmpleados)
router.post("/empleados", createEmpleados)
router.put("/empleados", editEmpleados)
router.delete("/empleados", deleteEmpleados)

export default router;
