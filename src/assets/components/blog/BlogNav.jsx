import React from 'react';
import '../../sass/blog/nav.scss';

interface NavBlogProps{
  titles: String[],
  where: String[];
}
const BlogNav: React.FC<NavBlogProps> = ({titles, where}) => (
  <div className="nav-blog-container col-12">

  </div>
)
export default BlogNav;
