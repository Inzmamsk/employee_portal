/**
 * name: Sk Inzamamuddin
 * date: 28/04/2021
 * version: 1.0.0
 */

import Notice from '../../models/notice';

/**
 * create notice.
 *
 * @returns {Promise}
 */

export async function createNotice(notice) {
    const noticeData = {
        body: notice.body,
        createdBy: notice.createdBy,
        objectType: notice.objectType,
        objectId: notice.objectId,
        type: notice.type,
        document: notice.document,
        updatedAt: notice.updatedAt,
        updatedBy: notice.updatedBy,
        // isDeleted: notice.isDeleted,
        // deletedBy: notice.deletedBy,
        // deletedAt: notice.deletedAt
    };
    const newNotice = await Notice.create(noticeData);
    return newNotice;
}