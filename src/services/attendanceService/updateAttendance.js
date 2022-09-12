/**
 * name: Priya Prasad Patra
 * date: 29/04/2021
 * version: 1.0.0
 */

import Attendance from '../../models/attendance';

/**
  * Update attendance data
  *
  * @returns {Promise}
  */

export function updateAttendance(attendance, attendanceData, userId) {
    return Attendance.findByIdAndUpdate(attendanceData.id, {
        attendanceDate: attendance.attendanceDate,
        userId: userId,
        startTime: attendance.startTime,
        endTime: attendance.endTime,
        note: attendance.note,
    })
        .then(function (updateAttendance) {
            return updateAttendance;
        })
        .catch(function (err) {
            return err;
        });
}
