import React, { useState } from 'react'
import "./Card.css"
import { AiOutlineShareAlt } from 'react-icons/ai'

const Card = (props) => {
    const [openStackExpandBar,setOpenStackExpandBar] = useState(false)

  return (
    <div className='card'>
        <div className="picture">
            <img src={props.image} alt={props.title} />
        </div>

        <div className="card__details">
            <div className="card__details__top">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="card__details__middle">
                <p className="description">
                    {props.data.description}
                </p>
            </div>
            <div className="card__details__bottom">
                <div className="stack__container">
                    <div className="stack__left">Stack</div>
                    <div className="stack__right">
                        <div className="stack__box__container">
                            {
                                props.stack.map((list,index)=>{
                                    if(index < 4){
                                        return (
                                            <div className="stack__box">
                                                <div className="stack__icon__container">
                                                    <span className="stack__icon" style={{color:list.iconColor}}>
                                                        {list.icon}
                                                    </span>
                                                    <span className="stack__name">
                                                        {list.name}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>{/* end stack__box__container */}

                        {
                            props.stack.length >4 ?(
                                <div className="stack__view__more">
                                    <div className="more__btn" onClick={()=>setOpenStackExpandBar(!openStackExpandBar)}></div>
                                    <div
                                    className={`stack__expand__box ${openStackExpandBar ?"open__stack__expand__box":""}`}
                                    >
                                        <h3 className="title">More Stack Used</h3>
                                        <div className="stack__box__container">
                                            {
                                                props.stack.map((list,index)=>{
                                                    if(index >= 4){
                                                        return (
                                                            <div className="stack__box">
                                                                <div className="stack__icon__container">
                                                                    <span className="stack__icon" style={{color:list.iconColor}}>
                                                                        {list.icon}
                                                                    </span>
                                                                    <span className="stack__name">
                                                                        {list.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            ):""
                        }
                    </div>
                </div>{/* end stack__container */}

                <div className="button__container">
                    <a href={props.demoLink} target='_blank' className='btn btn__primary'>Demo</a>
                    <div className="btn__share"><AiOutlineShareAlt/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
