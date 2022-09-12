import Company from '../../models/company';
/**
 * name: Priya Prasad Patra
 * date: 29/04/2021
 * version: 1.0.0
 */



/**
  * Get All Company
  *
  * @returns {Promise}
  */

export async function getAllCompany() {
    const companyData = await Company.find().populate('owner');
    return companyData;
}
