/**
 * name:PriyaPrasad Patra
 * date:10/6/2021
 * version:1.0.0
 */

import Blog from '../../models/blog';
import slug from 'slug';
import uniqid from 'uniqid';
/**
 *  update blog data
*
* @returns {Promise}
 */

export async function updateBlog(blog, blogdata) {
    const titleSlug = slug(uniqid.time(blog.title + '-'));
    const blogData = await Blog.findByIdAndUpdate(blogdata.id, {
        title: blog.title,
        type: blog.type,
        createdBy: blog.createdBy,
        published: blog.published,
        slug: titleSlug,
    });
    return blogData;
}