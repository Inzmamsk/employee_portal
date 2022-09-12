/**
 * name: Sk Inzamamuddin
 * date: 01/06/2021
 * version: 1.0.0
 */

import Personalinfo from '../../models/personalInfo';

/**
 * Delete personalInfo.
 *
 * @returns {Promise}
 */

export async function deletePersonalInfo(personalinfo) {
    const personalInfoData = await Personalinfo.findOneAndRemove(personalinfo.id);
    return personalInfoData;
}
