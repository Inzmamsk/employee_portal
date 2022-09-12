/**
 * name:PriyaPrasad Patra
 * date:10/6/2021
 * version:1.0.0
 */

import Blog from '../../models/blog';
import slug from 'slug';
import uniqid from 'uniqid';

/**
 *  create blog
*
* @returns {Promise}
 */

export async function createBlog(blog, userId) {
    const titleSlug = slug(uniqid.time(blog.title + '-'));
    const blogData = {
        title: blog.title,
        type: blog.type,
        createdBy: userId,
        published: blog.published,
        slug: titleSlug,
    };
    const blogDetails = await Blog.create(blogData);
    return blogDetails;
}
