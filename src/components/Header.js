import React, { useEffect, useRef } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import "./style.css"
const newNaw = [
    {
        titl: "Home",
        path: "/home"
    },
    {
        titl: "Catalog",
        path: "/catalog"
    },
    {
        titl: "Cart",
        path: "/cart"
    },
    {
        titl: "Product",
        path: "/product"
    },
]
const Header = () => {
    const headerRef = React.useRef(null)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("shrink")
            }
            else {
                headerRef.current.classList.remove("shrink")
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle("menuBar")
    return (
        <header ref={headerRef}>
            <div ref={menuLeft} className="header" >
                <div className="li1">
                    {newNaw.map((item, index) => (
                        <div key={index}>
                            <ul>
                                <li>
                                    <a href="#">{item.titl}</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"></img>

                <div className="buttons">
                    <Button className="butn1" animated='vertical'>
                        <Button.Content hidden>Shop</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                    <Button className="butn1" animated='fade'>
                        <Button.Content visible>Sign-up for a Pro account</Button.Content>
                        <Button.Content hidden>$12.99 a month</Button.Content>
                    </Button>
                </div>
                <div className="butn">
                    <Button onClick={menuToggle} icon>
                        <Icon name='align left' />
                    </Button>

                </div>
                <div className="lefts">
                    <Button onClick={menuToggle} icon='left chevron' />
                </div>

            </div>
        </header>
    )
}

export default Header
