/**
 * name:PriyaPrasad Patra
 * date:10/6/2021
 * version:1.0.0
 */

import Blog from '../../models/blog';

/**
  *  search blog
 *
 * @returns {Promise}
  */

export async function searchBlog(blog) {
    const blogData = await Blog.find({ 'title': { $regex: blog.title, $options: 'i' } });
    return blogData;
}