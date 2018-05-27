import React, { Component } from 'react';
import axios from 'axios'
import '../../css/style.css'
import SugarMP from '../../img/Sugar.mp4'
import SugarWebm from '../../img/Sugar.webm'
import User1 from '../../img/nat-8.jpg'
import User2 from '../../img/nat-9.jpg'

class Stories extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  render () {
      return(
        <div>
          <section class="section-stories">
            <div class="background-video">
              <video class="background-video__content" autoplay muted loop>
                <source src={SugarMP} type="video/mp4"/>
                <source src={SugarWebm} type="video/webm"/>
                  Your Browser is not suppoerted.
              </video>
            </div>
          
            <div class="u-center-text u-margin-bottom-big" >
              <h2 class="heading-secondary">
                We make people genuinely happy!
              </h2>
            </div>

            <div class="row">
              <div class="story">
                <figure class="story__shape">
                  <img src={User1} alt="Person on a tour" class="story__image"/>
                  <figcaption class="story__caption">
                    Mary Smith
                  </figcaption>
                </figure>
                <div class="story__text">
                  <h3 class="heading-tertiary u-margin-bottom-small">I had the best tasting treats EVER!</h3>
                   <p class="feature-bot__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi eaque assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi eaque assumenda
                    </p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="story">
                  <figure class="story__shape">
                    <img src={User2} alt="Person on a tour" class="story__image"/>
                    <figcaption class="story__caption">
                      Jack Wilson
                    </figcaption>
                  </figure>
                    <div class="story__text">
                      <h3 class="heading-tertiary u-margin-bottom-small">Wow! My life is completely different now!</h3>
                      <p class="feature-bot__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi eaque assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi eaque assumenda
                      </p>
                    </div>
                </div>
              </div>
              <div class="u-center-text u-margin-top-big">
                <a href="#" class="button-text"> See more reviews &rarr;</a>
              </div>
            </section>
        </div>
      )
  }
}
        

export default Stories;