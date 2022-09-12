/**
 * name: Priya Prasad Patra
 * date: 28/04/2021
 * version: 1.0.0
 */

import Assignment from '../../models/assignment';

/**
   * Delete assignment
   *
   * @returns {Promise}
   */
 
export function deleteAssignment(assignmentData) {
    return Assignment.findOneAndRemove(assignmentData.id)
        .then(function (deleteAssignment) {
            return deleteAssignment;
        })
        .catch(function (err) {
            return err;
        });
}
 