import Company from '../../models/company';

/**
 * name: Priya Prasad Patra
 * date: 29/04/2021
 * version: 1.0.0
 */



/**
 * Search company
 *
 * @returns {Promise}
 */

export async function searchCompany(company) {
    const searchedCompany = await Company.find({ 'name': { $regex: company.name, $options: 'i' } });
    return searchedCompany;
}