/**
 * name: Sk Inzamamuddin
 * date: 20/04/2021
 * version:1.0.0
 */

import Personalinfo from '../../models/personalInfo';

/**
 * Fetchone personalinfo.
 *
 * @returns {Promise}
 */

export async function getOnePersonalInfo(personalInfo) {
    const personalInfoData = await Personalinfo.findById(personalInfo.id);
    return personalInfoData;
}