/**
 * name: Sk Inzamamuddin
 * date: 28/04/2021
 * version: 1.0.0
 */

import Notice from '../../models/notice';

/**
 * Delete notice.
 *
 * @returns {Promise}
 */

export async function deleteNotice(notice) {
    const noticeData = await Notice.findOneAndRemove(notice.id);
    return noticeData;
}
