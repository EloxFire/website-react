import React from 'react';
import {Link} from 'react-router-dom';
import '../../sass/blog/nav.scss'

interface NavBlogProps{
  titles: String[],
  where: String[];
}
const BlogNav: React.FC<NavBlogProps> = ({titles, where}) => (
  <div className="nav-blog-container col-12">
    <div className="d-none d-xs-none d-sm-none d-md-flex d-lg-flex">
      {titles.map(function(item, index){
        return(
          <div>
            <Link to={where.map(function(where, number){return(where)})}>{item}</Link>
          </div>
        )
      })}
    </div>
    <div className="d-flex d-xs-flex d-sm-flex d-md-none d-lg-none">

    </div>
  </div>
)
export default BlogNav;
