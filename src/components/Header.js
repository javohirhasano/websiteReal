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
                <h5 className="logoTitle">SalePro</h5>

                <div className="buttons">
                    <Button color='purple' className="butn1" animated='vertical'>
                        <Button.Content hidden>Shop</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                    <Button className="butn1" color='twitter'>
                        <Icon name='instagram' /> Instagram
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
