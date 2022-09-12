/**
 * name: Sk Inzamamuddin
 * date: 20/04/2021
 * version:1.0.0
 */

import Personalinfo from '../../models/personalInfo';

/**
 * Update Personal Info.
 *
 * @returns {Promise}
 */

export async function updatePersonalInfo(personalInfo, personalInfos) {
    const personalInfoData = await Personalinfo.findByIdAndUpdate(personalInfos.id, {
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
    });
    return personalInfoData;
}
