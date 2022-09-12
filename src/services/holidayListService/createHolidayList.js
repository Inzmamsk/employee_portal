/** 
 * name:PriyaPrasad Patra
 * date:3/6/2021
 * version:1.0.0
*/

import HolidayList from '../../models/holidayList';

/** 
 * create holidayList.
 *
 * @returns {Promise}
*/
export async function createHolidayList(holidayList) {
    const holidayListData = {
        eventStartDate: holidayList.eventStartDate,
        eventType: holidayList.eventType,
        note: holidayList.note,
        eventEndDate: holidayList.eventEndDate,
    };
    const holidayListDetails = await HolidayList.create(holidayListData);
    return holidayListDetails;
}