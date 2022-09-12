import { Router } from 'express';
import * as personalInfoController from '../controller/personalInfo';
const router = Router();

/**
 * POST /api/v1/personal-info/create
 */
router.post('/create', personalInfoController.create);

/**
 * PUT /api/v1/personal-info/update
 */
router.put('/update', personalInfoController.update);

/**
 * DELETE /api/v1/personal-info/delete
 */
router.delete('/delete', personalInfoController.personalInfoDelete);

/**
 * GET /api/v1/personal-info/fetchone
 */
router.get('/fetchone', personalInfoController.getOne);

/**
 * GET /api/v1/personal-info/fetchall
 */
router.get('/fetchall', personalInfoController.getAll);

/**
 * POST /api/v1/personal-info/fileupload
 */

router.post('/updatefile', personalInfoController.updateFile);

/**
 * GET /api/v1/personal-info/getpersonalinfobyuserid
 */

router.get('/getpinfobyuserid', personalInfoController.getPersonalInfoByUserId);

export default router;
