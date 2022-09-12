/**
 * name: Sk Inzamamuddin
 * date: 28/04/2021
 * version: 1.0.0
 */

import Notice from '../../models/notice';

/**
 * Get all notice.
 *
 * @returns {Promise}
 */

export async function fetchAllNotice() {
    const noticeData = await Notice.find().populate('createdBy updatedBy');
    return noticeData;
}