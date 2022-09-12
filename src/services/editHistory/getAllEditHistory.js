/**
 * name: Priya Prasad Patra
 * date: 8/06/2021
 * version: 1.0.0
 */

import EditHistory from '../../models/editHistory';

/**
  * Get All editHistory
  *
  * @returns {Promise}
  */

export async function getAllEditHistory() {
    const editHistoryData = await EditHistory.find().populate('editedBy');
    return editHistoryData;
}