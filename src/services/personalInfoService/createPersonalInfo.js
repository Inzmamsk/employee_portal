/**
 * name: Sk Inzamamuddin
 * date: 20/04/2021
 * version: 1.0.0
 */

import Personalinfo from '../../models/personalInfo';
/**
 * Create Personal Info.
 *
 * @returns {Promise}
 */

export async function createPersonalInfo(personalInfo) {
    const personalInfoData = {
        userId: personalInfo.userId,
        avatar: personalInfo.avatar,
        gender: personalInfo.gender,
        dob: personalInfo.dob,
        secondaryEmail: personalInfo.secondaryEmail,
        secondaryPhone: personalInfo.secondaryPhone,
        designation: personalInfo.designation,
        coverImage: personalInfo.coverImage,
        about: personalInfo.about,
        cv: personalInfo.cv,
        skills: personalInfo.skills,
        experience: personalInfo.experience,
        adharcard: personalInfo.adharcard,
        bloodGroup: personalInfo.bloodGroup,
        address: personalInfo.address,
        familyDetails: personalInfo.familyDetails
    };
    const personalInfoDetails = await Personalinfo.create(personalInfoData);
    return personalInfoDetails;
}
