/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version:1.0.0
 *
 * Contains all API routes for Job Vacancy.
 */

import { Router } from 'express';
import * as jobVacancyController from '../controller/jobVacancy';
const router = Router();
import verifyToken from '../middleware/verifyToken'

/**
 * POST /api/v1/job-vacancy/create
 */
router.post('/create', verifyToken, jobVacancyController.create);

/**
 * GET /api/v1/job-vacancy/fetchall
 */
router.get('/fetchall', jobVacancyController.fetchAll);

/**
 * GET /api/v1/job-vacancy/fetcone
 */
router.get('/fetchone', jobVacancyController.fetchOne);

/**
 * PUT /api/v1/job-vacancy/update
 */
router.put('/update', verifyToken, jobVacancyController.update);

/**
 * DELETE /api/v1/job-vacancy/delete
 */
router.delete('/delete', jobVacancyController.Delete);

/**
 * GET /api/v1/job-vacancy/search
 */
router.get('/search', jobVacancyController.search);


export default router;
