import React, { Component } from 'react';
import axios from 'axios'
import '../../css/style.css'

class Tours extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  render () {
      return(
        <div>
          <section class="section-tours">
              <div class="u-center-text u-margin-bottom-big" >
                <h2 class="heading-secondary">
                  Most Popular Foods!
                </h2>
              </div>

              <div class="row">
                <div class="col-1-of-3">
                  <div class="card">
                    <div class="card__side card__side--front">
                      <div class="card__picture card__picture--1">
                      </div>   
                      <h4 class="card__heading">
                        <span class="card__heading-span card__heading-span--1">Lemon Bars</span>
                      </h4>
                      <div class="card__details">
                        <ul>
                          <li>1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>5</li>
                        </ul>
                      </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                      <div class="card__cta">
                        <div class="card__price-box">
                          <p class="card__price-only">Only</p>
                          <p class="card__price-value">$3.00</p>
                        </div>
                        <a href="#" class="button button--white">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-1-of-3">
                  <div class="card">
                    <div class="card__side card__side--front">
                      <div class="card__picture card__picture--2">        
                      </div>   
                      <h4 class="card__heading">
                          <span class="card__heading-span card__heading-span--2">Banana Bread</span>        
                      </h4>   
                      <div class="card__details">
                          <ul>
                              <li>1</li>
                              <li>2</li>
                              <li>3</li>
                              <li>4</li>
                              <li>5</li>
                          </ul>
                      </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-2">
                      <div class="card__cta">
                        <div class="card__price-box">
                          <p class="card__price-only">Only</p>
                          <p class="card__price-value">$6.00</p>
                        </div>
                        <a href="#" class="button button--white">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-1-of-3">
                  <div class="card">
                    <div class="card__side card__side--front">
                      <div class="card__picture card__picture--3">
                      </div>   
                      <h4 class="card__heading">
                        <span class="card__heading-span card__heading-span--3">Sugar Cookies</span>                
                      </h4>    
                        <div class="card__details">
                          <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                        </div>
                      </div>
                      <div class="card__side card__side--back card__side--back-3">
                        <div class="card__cta">
                          <div class="card__price-box">
                            <p class="card__price-only">Only</p>
                            <p class="card__price-value">$5.00</p>
                          </div>
                          <a href="#" class="button button--white">Order Now</a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div class="u-center-text u-margin-top-big">
                <a href="#" class="button button--red">Discover all food!</a>
              </div>
            </section>
        </div>
    )
  }
}
        
export default Tours;