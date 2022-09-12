/**
 * name:PriyaPrasad Patra
 * date:28/4/2021
 * version:1.0.0
 */

import Assignment from '../../models/assignment';

/**
  *  create assignment
 *
 * @returns {Promise}
  */

export async function createAssignment(assignment) {
    const assignmentData = {
        assignmentTo: assignment.assignmentTo,
        assignmentBy: assignment.assignmentBy,
        document: assignment.document,
        link: assignment.link,
        notes: assignment.notes,
        title: assignment.title
    };
    const assignmentDetails = await Assignment.create(assignmentData);
    return assignmentDetails;
}