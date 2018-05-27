import React, { Component } from 'react';
import axios from 'axios'
import '../../css/style.css'

class Book extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }


  render () {
      return(

        <div>
          <section class="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                <div class="u-margin-bottom-medium" >
                                    <h2 class="heading-secondary">
                                        Catering?
                                    </h2>
                                </div>

                                <div class="form__group">
                                    <input type="text" placeholder="Full Name" required class="form__input" id="name"/>
                                    <label for="name" class="form__label">Full Name</label>
                                </div>

                                <div class="form__group">
                                    <input type="email" placeholder="Email Address" required class="form__input" id="email"/>
                                    <label for="email" class="form__label">Email Address</label>
                                </div>

                                <div class="form__group u-margin-bottom-medium">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="small" name="size"/>
                                        <label for="small" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Small group</label>
                                    </div>

                                    <div class="form__radio-group">
                                            <input type="radio" class="form__radio-input" id="large" name="size"/>
                                            <label for="large" class="form__radio-label">
                                                <span class="form__radio-button"></span>
                                                Large group
                                            </label>
                                        </div>
                                </div>

                                <div class="form__group">
                                    <button class="button button--red">Next Step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      )
  }
}
        

export default Book;