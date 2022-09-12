/**
 * name: Sk Inzamamuddin
 * date: 22/04/2021
 * version: 1.0.0
 */
import User from '../../models/users';
import randomstring from 'randomstring';
import { sendEmail } from '../../services/hooks/sesClient';
import { BadRequest } from '../../utils/errors';

/**
 * Create user.
 *
 * @returns {Promise}
 */

export async function createUser(user) {

    const partition = user.email.substring(0, user.email.lastIndexOf('@'));
    const userName = randomstring.generate({
        length: 5,
        charset: 'alphabetic'
    });
    const randomUsername = partition.concat(userName);

    const userData = {
        name: user.name,
        email: user.email,
        password: user.password,
        username: randomUsername,
        phone: user.phone,
        role: user.role,
        phoneVerified: user.phoneVerified,
        emailVerified: user.emailVerified,
        joiningDate: user.joiningDate,
        departmentId: user.departmentId,
        reportingManagerId: user.reportingManagerId
    };

    const userDetails = await User.create(userData);
    if (userDetails) {
        console.log(userDetails, 'userdata');
        // const emailData = {
        //     to: to,
        //     subject: subject,
        //     message: message
        // };
        const emailData = {
            to: 'inzitricks@gmail.com',
            subject: 'AWS SES',
            message: 'hii,,there!'
        };
        sendEmail(emailData);
        console.log(emailData, 'email data');
        return userDetails;
    }
    else {
        throw new BadRequest('User is not Created');
    }
}
