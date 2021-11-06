import React, { useState, useRef, useEffect } from 'react'
import slideData from '../data/slideData'
import { Button, Icon } from 'semantic-ui-react'
import "./products.css"


const Home = () => {
    const [activeSlide, setactiveSlide] = useState(0)
    const nexSlide = () => {
        const index = activeSlide + 1 === slideData.length ? 0 : activeSlide + 1
        setactiveSlide(index)
    }
    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? slideData.length - 1 : activeSlide - 1
        setactiveSlide(index)
    }


    return (
        <div className="home">
            {slideData.map((item, index) => (
                <div className={`SlideHero ${index === activeSlide ? "active" : ""}`} key={index}>
                    <div className="Girls">
                        <div className={`writes`} >
                            <h1 className={`text-${item.color}`}>{item.title}</h1>
                            <p>{item.description}</p>
                            <Button primary className="butn1" animated='vertical'>
                                <Button.Content hidden>Shop</Button.Content>
                                <Button.Content visible>
                                    <Icon name='shop' />
                                </Button.Content>
                            </Button>
                        </div>
                        <div className={`shape bg-${item.color}`}></div>
                        <img src={item.img} className="slideImg" ></img>
                    </div>
                    <div className="d-flex icons align-items-center">
                        <Button onClick={nexSlide} icon='left chevron' />
                        <div> {activeSlide}/{slideData.length}</div>
                        <Button onClick={prevSlide} icon='right chevron' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home
