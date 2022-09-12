/**
 * name: Sk Inzamamuddin
 * date: 28/04/2021
 * version: 1.0.0
*/

import Notice from '../../models/notice';

/**
 * Get single notice by Id.
 *
 * @returns {Promise}
*/

export async function fetchOneNotice(notice) {
    const noticeData = await Notice.findById(notice.id);
    return noticeData;
}