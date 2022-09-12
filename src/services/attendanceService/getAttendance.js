/**
 * name: Priya Prasad Patra
 * date: 29/04/2021
 * version: 1.0.0
 */

import Attendance from '../../models/attendance';

/**
 * Get single attendance
 *
 * @returns {Promise}
 */

export function getSingleAttendance(attendance) {
    return Attendance.findById(attendance.id)
        .then(function (getAttendance) {
            return getAttendance;
        })
        .catch(function (err) {
            return err;
        });
}
