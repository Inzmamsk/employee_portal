/**
 * name: Priya Prasad Patra
 * date: 29/04/2021
 * version: 1.0.0
 */

import Attendance from '../../models/attendance';

/**
 * Get All attendance
 *
 * @returns {Promise}
 */

export function getAllAttendance() {
    return Attendance.find()
        .then(function (getAllAttendance) {
            return getAllAttendance;
        })
        .catch(function (err) {
            return err;
        });
}
