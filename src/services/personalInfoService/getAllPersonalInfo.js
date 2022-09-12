/**
 * name: Sk Inzamamuddin
 * date: 01/06/2021
 * version: 1.0.0
 */

import Personalinfo from '../../models/personalInfo';

/**
 * Get all personalInfo.
 *
 * @returns {Promise}
 */

export async function getAllPersonalInfo() {
    const personalInfoData = await Personalinfo.find();
    return personalInfoData;
}