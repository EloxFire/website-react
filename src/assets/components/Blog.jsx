import React, {Component} from 'react';

import Home from './blog/Home.jsx';
import Firstyear from './blog/Firstyear.jsx';
import '../sass/blog.scss';

class Blog extends Component{
  render(){
    return(
      <div id="blog">
        <div className="blog-content-container ml-5 mr-5 mt-5">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="firstyear-tab" data-toggle="tab" href="#firstyear" role="tab" aria-controls="firstyear" aria-selected="false">1st year</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="secondyear-tab" data-toggle="tab" href="#secondyear" role="tab" aria-controls="secondyear" aria-selected="false">2nd year</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <Home/>
            </div>
            <div class="tab-pane fade" id="firstyear" role="tabpanel" aria-labelledby="firstyear-tab">
              <Firstyear/>
            </div>
            <div class="tab-pane fade" id="secondyear" role="tabpanel" aria-labelledby="secondyear-tab">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog;
