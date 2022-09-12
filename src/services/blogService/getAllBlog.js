/**
 * name:PriyaPrasad Patra
 * date:10/6/2021
 * version:1.0.0
 */

import Blog from '../../models/blog';

/**
  *  create blog
 *
 * @returns {Promise}
  */

export async function getAllBlog() {
    const blogData = await Blog.find().populate('createdBy');
    return blogData;
}