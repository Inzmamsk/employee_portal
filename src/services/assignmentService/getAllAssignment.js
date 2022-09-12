/**
 * name: Priya Prasad Patra
 * date: 28/04/2021
 * version: 1.0.0
 */

import Assignment from '../../models/assignment';

/**
  * Get All assignment
  *
  * @returns {Promise}
  */
 
export async function getAllAssignment() {
    const assignmentData = await Assignment.find().populate('assignmentTo assignmentBy');
    return assignmentData;
}