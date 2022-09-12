/**
 * name: Sk Inzamamuddin
 * date: 03/05/2021
 * version:1.0.0
 */
import PersonalInfo from '../../models/personalInfo';
import { uploadImg } from '../hooks/fileUpload';

/**
 * Update file path.
 *
 * @returns {Promise}
 */

export function updateFiles(file) {
    //console.log(file, "fffffiiiiiiiiiiiiiiiiiiiiiiiiiiillleee");
    console.log(file.path, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    return uploadImg, PersonalInfo.findByIdAndUpdate(file.id, {
        avatar: file.path
    }, {
        new: true
    })
        .then(function (filePath) {
            return filePath;
        })
        .catch(function (err) {
            return err;
        });
}