import React, { Component } from 'react';
import axios from 'axios'
import '../../css/style.css'

class Features extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }


  render () {
      return(

        <div>
          <section class="section-features">
                <div class="row">
                  <div class="col-1-of-4">
                    <div class="feature-box">
                      <i class="feature-box__icon icon-basic-world"></i>
                      <h3 class="heading-tertiary u-margin-bottom-small">Explore our food</h3>
                      <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                  </div>

                  <div class="col-1-of-4">
                    <div class="feature-box">
                      <i class="feature-box__icon icon-basic-compass"></i>
                      <h3 class="heading-tertiary u-margin-bottom-small">Taste greatness</h3>
                      <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
                    </div>
                  </div>

                  <div class="col-1-of-4">
                    <div class="feature-box">
                      <i class="feature-box__icon icon-basic-map"></i>
                      <h3 class="heading-tertiary u-margin-bottom-small">Find your taste</h3>
                      <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
                    </div>
                  </div>

                  <div class="col-1-of-4">
                    <div class="feature-box">
                      <i class="feature-box__icon icon-basic-heart"></i>
                      <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                      <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
                    </div>
                  </div>
                </div>
            </section>
        </div>
      )
  }
}
        
export default Features;