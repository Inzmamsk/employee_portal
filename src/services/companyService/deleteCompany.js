/**
 * name: Priya Prasad Patra
 * date: 27/04/2021
 * version: 1.0.0
 */

import Company from '../../models/company';

/**
  * Delete company
  *
  * @returns {Promise}
  */

export async function deleteCompany(company) {
    const companyData = await Company.findOneAndRemove(company.id);
    return companyData;
}
