import React, { Component } from 'react';
import axios from 'axios'
import Header from './header/header'
import About from './section-about/section-about'
import Features from './section-features/section-features'
import Tours from './section-tours/section-tours'
import Stories from './section-stories/section-stories'
import Book from './section-book/section-book'
import Footer from './footer/footer'
import '../css/style.css'




class Home extends Component {

  constructor() {
    super()
    this.state = {
      
    }
  }


  render () {
      return(
        <div>
            <Header/>
            <About/>
            <Features/>
            <Tours/>
            <Stories/>
            <Book/>
            <Footer/>
        </div>
      )
  }
}
        

export default Home;
