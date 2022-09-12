/**
 * name: Sk Inzamamuddin
 * date: 29/05/2021
 * version: 1.0.0
 */

import Attendance from '../../models/attendance';


/**
 * Get current date attendance
 *
 * @returns {Promise}
 */

export async function getCurrentDateAttendance() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const attendanceData = await Attendance.find({ createdAt: { $gte: today } });
    return attendanceData;
}
