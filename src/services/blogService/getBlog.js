/**
 * name:PriyaPrasad Patra
 * date:10/6/2021
 * version:1.0.0
 */

import Blog from '../../models/blog';

/**
  *  getSingle blog
 *
 * @returns {Promise}
  */

export async function getSingleBlog(blog) {
    const blogData = await Blog.findById(blog.id).populate('createdBy');
    return blogData;
}