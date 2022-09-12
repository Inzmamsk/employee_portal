import { Router } from 'express';
import userRoutes from './../src/router/users';
import personalInfoRoutes from './../src/router/personalInfo';
import companyRoutes from './../src/router/company';
import assignmentRoutes from './../src/router/assignment';
import attendanceRoutes from './../src/router/attendance';
import departmentRoutes from './../src/router/departments';
import noticeRoutes from './../src/router/notice';
import jobVacancyRoutes from './../src/router/jobVacancy';

/**
 * Contains all API routes for the application.
 */
const router = Router();

router.use('/users', userRoutes);
router.use('/personal-info', personalInfoRoutes);
router.use('/company', companyRoutes);
router.use('/assignment', assignmentRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/departments', departmentRoutes);
router.use('/notice', noticeRoutes);
router.use('/job-vacancy', jobVacancyRoutes);


export default router;
