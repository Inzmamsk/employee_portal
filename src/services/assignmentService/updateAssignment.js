/**
 * name: Priya Prasad Patra
 * date: 28/04/2021
 * version: 1.0.0
 */

import Asssignment from '../../models/assignment';
 
/**
   * Update assignment data
   *
   * @returns {Promise}
   */
 
export function updateAssignment(assignment, assignmentData) {
    return Asssignment.findByIdAndUpdate(assignmentData.id, {
        assignmentTo: assignment.assignmentTo,
        assignmentBy: assignment.assignmentBy,
        document: assignment.document,
        link: assignment.link,
        notes: assignment.notes,
        title: assignment.title,
    })
        .then(function (updateAssignment) {
            return updateAssignment;
        })
        .catch(function (err) {
            return err;
        });
}
 