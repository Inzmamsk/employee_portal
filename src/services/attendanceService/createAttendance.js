/** 
 * name:PriyaPrasad Patra
 * date:29/4/2021
 * version:1.0.0
*/

import Attendance from '../../models/attendance';

/** 
 *  create attendance
 *
 * @returns {Promise}
*/

export function createAttendance(attendance, userId) {
    const attendanceData = {
        attendanceDate: attendance.attendanceDate,
        userId: userId,
        startTime: attendance.startTime,
        endTime: attendance.endTime,
        note: attendance.note,
    };
    return Attendance.create(attendanceData)
        .then(function (newAttendance) {
            return newAttendance;
        })
        .catch(function (err) {
            return err;
        });
}