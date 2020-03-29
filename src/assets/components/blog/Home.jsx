import React, {Component} from 'react';
import '../../sass/blog.scss';

class Home extends Component{
  render(){
    return(
      <div id="fy" className="pt-5">
        <h3 className="blogTitlePurpleWithBorder">Welcome in the blog section !</h3>

        <div className="ml-5">
          <p className="card-text">
            Here, you can navigate with the above tabs through all my internship repports and professionnal experience that I had.
            <br/><small>(Be carefull, those are written in French)</small>
          </p>

          <div className="blogBoxHome mt-5">
            <p>
              All the internships presented here, were done as part of the validation of my school year at Ynov Campus in computer science.
            </p>
            <p>
              To validate the first year, it is not necessary to carry out an internship in an IT company. This internship is before done to discover work in business.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
