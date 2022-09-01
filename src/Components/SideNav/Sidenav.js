import React, { useState } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import './SideNav.css'
import OfflineBoltRoundedIcon from '@material-ui/icons/OfflineBoltRounded';
import Intro from "../contents/Intro";
import History from "../contents/History";
import Install from "../contents/Install";
import Need from "../contents/Need";
import Differences from "../contents/Differences";
import Engine from "../contents/Engine";
import Command from "../contents/Command";
import Exit from "../contents/Exit";
import Variables from "../contents/Variables";
import Usenode from "../contents/Usenode";


const navItems = [
    {
        className: "side-nav-item hover",
        activeClassName: 'side-nav-item hover testactive',
        content: "Introduction to Node.js",
        id: "testactive",
        link: "./"

    },
    {
        className: "side-nav-item2 hover",
        activeClassName: 'side-nav-item2 hover testactive',
        content: "A brief history of Node.js",
        id: "testactive",
        link: './History'

    },
    {
        className: "side-nav-item3 hover",
        activeClassName: 'side-nav-item3 hover testactive',
        content: "How to install Node.js",
        id: "testactive",
        link: './install'

    },
    {
        className: "side-nav-item4 hover",
        activeClassName: 'side-nav-item4 hover testactive',
        content: "How much JavaScript do you need to know to use Node.js?",
        id: "testactive",
        link: './need'
    },
    {
        className: "side-nav-item5 hover",
        activeClassName: 'side-nav-item5 hover testactive',
        content: "Differences between Node.js and the Browser",
        id: "testactive",
        link: './differences'
    },
    //     {
    //         type: "separator"
    //     },

]
const navItems2 = [
    {
        className: "side-nav-item6 hover",
        activeClassName: 'side-nav-item6 hover testactive',
        content: "The V8 JavaScript Engine",
        id: "testactive",
        link: './Engine'
    },
    {
        className: "side-nav-item7 hover",
        activeClassName: 'side-nav-item7 hover testactive',
        content: "Run Node.js scripts from the command line",
        id: "testactive",
        link: './command'
    },
    {
        className: "side-nav-item8 hover",
        activeClassName: 'side-nav-item8 hover testactive',
        content: "How to exit from a Node.js program",
        id: "testactive",
        link: './exit'
    },
    {
        className: "side-nav-item9 hover",
        activeClassName: 'side-nav-item9 hover testactive',
        content: "How to read environment variables from Node.js",
        id: "testactive",
        link: './variables'
    },
    {
        className: "side-nav-item10 hover",
        activeClassName: 'side-nav-item10 hover testactive',
        content: "How to use the Node.js",
        id: "testactive",
        link: './useNode'
    },



]
const Sidenav = (props) => {
    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState("");
    console.log(props);



    return (
        <main className='grid-container'>

            <nav className="side-nav" className={!props.setOpen ? "side-nav" : "open"}>
                <ul className="side-nav-list">
                    <h2 className="t-body2 side-nav-title">
                        <i className="material-icons"><OfflineBoltRoundedIcon /></i>
                        Quick Start</h2>

                    {/* <Link className="side-nav-item hover " onClick={() => { myFunction("side-nav-item") }} to={'./'}   >
                        <h5 >Introduction to Node.js</h5>
                    </Link>
                    <Link className={"side-nav-item2 hover"} onClick={() => { myFunction("side-nav-item2") }} to={'./History'}>
                        <h5>A brief history of Node.js</h5>

                    </Link>
                    <Link className="side-nav-item3 hover" onClick={() => { myFunction("side-nav-item3") }} to={'./install'}  >
                        <h5>How to install Node.js</h5>

                    </Link>
                    <Link className="side-nav-item4 hover" onClick={() => { myFunction("side-nav-item4") }} to={'./need'} >
                        <h5>How much JavaScript do you need to know to use Node.js?</h5>

                    </Link> */}
                    {
                        navItems.map((item, idx) => {

                            return (

                                <Link className={idx < index || idx === index ? item.activeClassName : item.className} onClick={() => {
                                    props.open(false)
                                    setIndex2("")
                                    setIndex(idx)
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                }} id={idx < index ? item.id : " "} to={item.link}  >
                                    <h5 style={{ color: index === idx ? "green" : "var(--font-color)" }}>{item.content}</h5>

                                </Link>

                            )
                        })
                    }

                    {/* <a className="side-nav-item5 hover" >
                        <h5>Differences between Node.js and the Browser</h5>

                    </a> */}

                </ul>
                <ul className="side-nav-list">
                    <h2 className="t-body2 side-nav-title">
                        <i className="material-icons"><OfflineBoltRoundedIcon /></i>
                        Getting Started</h2>


                    {
                        navItems2.map((item, idx) => {

                            return (

                                <Link className={idx < index2 || idx === index2 ? item.activeClassName : item.className} onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                    setIndex(5)
                                    setIndex2(idx)
                                    props.open(false)
                                }} id={idx < index2 ? item.id : " "} to={item.link}  >
                                    <h5 style={{ color: index2 === idx ? "green" : "var(--font-color)" }}>{item.content}</h5>

                                </Link>

                            )
                        })
                    }




                    {/* <a className="side-nav-item6 hover " >
                        <h5>The V8 JavaScript Engine</h5>
                    </a>
                    <a className="side-nav-item7 first hover" >
                        <h5>Run Node.js scripts from the command line</h5>

                    </a>
                    <a className="side-nav-item8 second hover" >
                        <h5>How to exit from a Node.js program</h5>

                    </a>
                    <a className="side-nav-item9 third hover" >
                        <h5>How to read environment variables from Node.js</h5>

                    </a>
                    <a className="side-nav-item10 fourth hover" >
                        <h5>How to use the Node.js</h5>

                    </a> */}




                </ul>

            </nav>
            <article className={!props.setOpen ? "article-reader" : "notopen"} >
                <Switch>
                    <Route path="/" exact={true}>
                        <Intro index={index} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/history" exact={true}>
                        <History index={index} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/install" exact={true}>
                        <Install index={index} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/need" exact={true}>
                        <Need index={index} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/differences" exact={true}>
                        <Differences index={index} index2={index2} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/engine" exact={true}>
                        <Engine index2={index2} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/command" exact={true}>
                        <Command index2={index2} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/exit" exact={true}>
                        <Exit index2={index2} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/variables" exact={true}>
                        <Variables index2={index2} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                    <Route path="/useNode" exact={true}>
                        <Usenode index2={index2} setIndex={setIndex} setIndex2={setIndex2} />
                    </Route>
                </Switch>
            </article>
        </main>
    )
}

export default Sidenav;

