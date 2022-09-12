/**
  * name:Priya Prasad Patra
  * date:8/6/2021
  * version:1.0.0
  *
  */

import { Router } from 'express';
import * as editHistoryController from '../controller/editHistory';
const router = Router();

/**
  * GET /api/v1/edithistory/getall
  */
router.get('/getall', editHistoryController.getAll);

/**
 * GET /api/v1/edithistory/getone
 */
router.get('/getone', editHistoryController.getOne);

export default router;