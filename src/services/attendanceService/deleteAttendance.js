/**
 * name: Priya Prasad Patra
 * date: 29/04/2021
 * version: 1.0.0
 */

import Attendance from '../../models/attendance';

/**
  * Delete attendance
  *
  * @returns {Promise}
  */

export function deleteAttendance(attendanceData) {
    return Attendance.findOneAndRemove(attendanceData.id)
        .then(function (deleteAttendance) {
            return deleteAttendance;
        })
        .catch(function (err) {
            return err;
        });
}
