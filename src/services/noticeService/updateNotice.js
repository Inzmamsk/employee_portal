/**
 * name: Sk Inzamamuddin
 * date: 28/04/2021
 * version: 1.0.0
 */

import Notice from '../../models/notice';

/**
 * Update notice.
 *
 * @returns {Promise}
 */

export async function updateNotice(notice, noticeData) {
    const noticeDetails = await Notice.findByIdAndUpdate(noticeData.id, {
        body: notice.body,
        createdBy: notice.createdBy,
        objectType: notice.objectType,
        objectId: notice.objectId,
        type: notice.type,
        document: notice.document,
        updatedAt: notice.updatedAt,
        updatedeBy: notice.updatedeBy,
        //isDeleted: notice.isDeleted,
        //deletedBy: notice.deletedBy,
        //deletedAt: notice.deletedAt
    });
    return noticeDetails;
}