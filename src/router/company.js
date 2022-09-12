import { Router } from 'express';
import * as companyController from '../controller/company';
const router = Router();
import verifyToken from '../middleware/verifyToken'


/**
 * name:Priya Prasad Patra
 * date:27/4/2021
 * version:1.0.0
 *
 * POST /api/v1/company/create
 */
router.post('/create', companyController.create);


/**
  * name:Priya Prasad Patra
  * date:27/4/2021
  * version:1.0.0
  *
  * PUT /api/v1/company/update
  */
router.put('/update', verifyToken, companyController.update);

/**
  * name:Priya Prasad Patra
  * date:27/4/2021
  * version:1.0.0
  *
  * GET /api/v1/company/fetchone
  */
router.get('/fetchone', companyController.get);


/**
  * name:Priya Prasad Patra
  * date:29/4/2021
  * version:1.0.0
  *
  * GET /api/v1/company/getAll
  */
router.get('/getall', companyController.getAll);


/**
  * name:Priya Prasad Patra
  * date:29/4/2021
  * version:1.0.0
  *
  * GET /api/v1/company/search
  */
router.get('/search', companyController.search);


/**
  * name:Priya Prasad Patra
  * date:27/4/2021
  * version:1.0.0
  *
  * DELETE /api/v1/company/delete
  */
router.delete('/delete', companyController.companyDelete);


export default router;
