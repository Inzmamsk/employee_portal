import Company from '../../models/company';
import randomstring from 'randomstring';

/**
 * name:PriyaPrasad Patra
 * date:27/4/2021
 * version:1.0.0
 * 
 * create company.
 *
 * @returns {Promise}
 */

export async function createCompany(company) {
    const partition = company.email.substring(0, company.email.lastIndexOf('@'));
    const companyUniqueId = randomstring.generate({
        length: 5,
        charset: 'alphabetic'
    });
    const randomUniqueCompanyId = partition.concat(companyUniqueId);
    const companyData = {
        name: company.name,
        logo: company.logo,
        about: company.about,
        establishedOn: company.establishedOn,
        owner: company.owner,
        location: company.location,
        address: company.address,
        phone: company.phone,
        secondaryNumber: company.secondaryNumber,
        email: company.email,
        website: company.website,
        companyUniqueId: randomUniqueCompanyId,
        zipCode: company.zipCode
    };
    const newCompany = await Company.create(companyData);
    return newCompany;
}