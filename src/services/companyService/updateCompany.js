/**
 * name: Priya Prasad Patra
 * date: 27/04/2021
 * version: 1.0.0
 */

import Company from '../../models/company';

/**
  * Update company data.
  *
  * @returns {Promise}
  */

export async function updateCompany(company, companyDetails, userId) {
  const partition = company.email.substring(0, company.email.lastIndexOf('@'));
  const companyUniqueId = randomstring.generate({
    length: 5,
    charset: 'alphabetic'
  });
  const randomUniqueCompanyId = partition.concat(companyUniqueId);
  const companyData = await Company.findByIdAndUpdate(companyDetails.id, {
    name: company.name,
    logo: company.logo,
    about: company.about,
    establishedOn: company.establishedOn,
    owner: userId,
    location: company.location,
    address: company.address,
    phone: company.phone,
    secondaryNumber: company.secondaryNumber,
    email: company.email,
    website: company.website,
    companyUniqueId: randomUniqueCompanyId,
    zipCode: company.zipCode
  });
  return companyData;
}