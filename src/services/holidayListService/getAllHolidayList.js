/**
 * name: Priya Prasad Patra
 * date: 3/06/2021
 * version: 1.0.0
 */

import HolidayList from '../../models/holidayList';

/**
  * Get All Company
  *
  * @returns {Promise}
  */
 
export async function getAllHolidayList() {
    const holidayListData = await HolidayList.find();
    return holidayListData;
}