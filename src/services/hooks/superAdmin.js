/**
 * name: Sk Inzamamuddin
 * date: 18/05/2021
 * version: 1.0.0
 */

import User from '../../models/users';

const superAdmin = () => {
    User.findOne({ email: 'admin@gmail.com' }, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            console.log(user);
        } else {
            const defaultuserData = {
                name: 'Admin',
                email: 'admin@gmail.com',
                password: 'Superadmin@123',
                username: 'superadmin',
                phone: '9658745218',
            };
            User.create(defaultuserData);
        }
    });
};
export default superAdmin;
