import Personalinfo from '../../models/personalInfo';

/**
 * Fetch personalinfo by userId.
 *
 * @returns {Promise}
 */

export async function fetchPersonalInfoByUserId(personalInfo) {
    const personalInfoData = await Personalinfo.find({ userId: personalInfo.userId });
    return personalInfoData;
}