/**
 * name: Priya Prasad Patra
 * date: 8/6/2021
 * version: 1.0.0
 */

import EditHistory from '../../models/editHistory';

/**
  * Get ById editHistory.
  *
  * @returns {Promise}
  */
 
export async function getOneEditHistory(editHistory) {
    const editHistoryData = await EditHistory.findById(editHistory.id).populate('editedBy');
    console.log(editHistoryData);
    return editHistoryData;
}