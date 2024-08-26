import React, { useEffect, useRef } from 'react'
import "./Services.css"
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el= container.current
    gsap.fromTo('.service__head',{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
  )
  },[])
  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
                I transform your ideas, and consequently your desires, into a 
               distinctive web project that both inspires you and captivates your customers.
            </p>
          </div>

          <div className="services__group">
            <article className="service">
              <div className="service__top">
                <div className="icon__container">
                  <FaPaintBrush className="icon"/>
                </div>
                <h3 className="title">UI/UX Design</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
                  voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
                  eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End ui/ux */}


            <article className="service" style={{"--color-primary":"var(--color-success)"}}>
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Web Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
                  voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
                  eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End Web development */}


            <article className="service" style={{"--color-primary":"blueviolet"}}>
              <div className="service__top">
                <div className="icon__container">
                  <TfiWrite className="icon"/>
                </div>
                <h3 className="title">Content Creation</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
                  voluptatum earum quam tempore, repellat aut vero ut eum, provident accusamus recusandae 
                  eligendi, adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End content creation */}
          </div>
       </div>
    </section>
  )
}

export default Services
