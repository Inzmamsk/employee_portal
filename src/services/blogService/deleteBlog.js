/**
 * name:PriyaPrasad Patra
 * date:10/6/2021
 * version:1.0.0
 */

import Blog from '../../models/blog';

/**
  * delete blog
 *
 * @returns {Promise}
  */


export async function deleteBlog(blog) {
    const blogData = await Blog.findOneAndRemove(blog.id);
    return blogData;
}