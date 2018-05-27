import React, { Component } from 'react';
import axios from 'axios'
import '../../css/style.css'
import Becky from "../../img/becky.jpg";
import Kolet from "../../img/kolet.jpg";
import Lexi from "../../img/lexi.jpg";




class About extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }


  render () {
      return(

        <div>
            <section class="section-about">
                <div class="u-center-text u-margin-bottom-big" >
                    <h2 class="heading-secondary">
                        Meet our Bakers!
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small ">
                            You're going to fall in love with our treats!
                        </h3>
                        <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi eaque assumenda similique eius necessitatibus quibusdam velit sapiente placeat. Doloremque ullam quam ea recusandae molestiae incidunt neque officiis, facere hic!
                        </p>
                        
                        <h3 class="heading-tertiary u-margin-bottom-small">
                                This is the random stuff about US!
                        </h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi eaque assumenda similique eius necessitatibus quibusdam velit sapiente placeat. Doloremque ullam quam ea recusandae molestiae incidunt neque officiis, facere hic!
                         </p>

                         <a href="#" class="button-text">
                             Learn more &rarr;
                         </a>
                         
                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">
                            <img src={Kolet} alt="Kolet" class="composition__photo composition__photo--p1"/>
                            <img src={Lexi} alt="Lexi" class="composition__photo composition__photo--p2"/>
                            <img src={Becky} alt="Becky" class="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
      )
  }
}
        

export default About;