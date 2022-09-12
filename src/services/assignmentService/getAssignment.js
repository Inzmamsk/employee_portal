
/**
 * name: Priya Prasad Patra
 * date: 28/04/2021
 * version: 1.0.0
 */

import Assignment from '../../models/assignment';

/**
  * Get single assignment
  *
  * @returns {Promise}
  */
 
export async function getSingleAssignment(assignment) {
    const assignmentData = await Assignment.findById(assignment.id).populate('owner');
    return assignmentData;
}
 