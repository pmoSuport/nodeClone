import React, { useState } from 'react'
import IntroImg from "../../images/intro.PNG"
import { Link } from "react-router-dom";

const Intro = ({ index, setIndex, setIndex2 }) => {
    const [tick, setTick] = useState(false);

    function copyCodeToClipboard() {
        console.log("copy")
        const el = document.getElementById("copy");
        console.log(el);
        const textArea = document.createElement("textarea");
        textArea.value = el.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();

    }

    function buttonTicked() {
        console.log("tick")
        // const ticked = document.getElementById("tickable");
        // ticked.classList.add("buttonticked");
        setTick(true)
        setTimeout(function () {

            setTick(false)

        }, 3000);




    }
    return (
        <>
            <h1 className="article-reader-headline">Introduction to Node.js</h1>
            <details className='toc' open>
                <summary>
                    <h6>TABLE OF CONTENTS</h6>
                </summary>
                <ul className="tableOfContents">
                    <li>
                        <a href="https://nodejs.dev/learn/#a-vast-number-of-libraries">A Vast Number of Libraries</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/#an-example-nodejs-application">An Example Node.js Application</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/#nodejs-frameworks-and-tools">Node.js Frameworks and Tools</a>
                    </li>


                </ul>
            </details>
            <div className="para">
                <p>
                    Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
                </p>
                <p>
                    Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
                </p>
                <p>
                    A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.
                </p>
                <p>
                    This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
                </p>
                <p>
                    Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.
                </p>
                <p>
                    In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
                </p>
                <h2 id="a-vast" style={{ position: 'relative' }}>
                    <a href="#" className="autolink-headers before">
                        <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                    </a>
                    A Vast Number of Libraries
                </h2>
                <p>
                    npm with its simple structure helped the ecosystem of Node.js proliferate, and now the npm registry hosts over 1,000,000 open source packages you can freely use.
                </p>
                <h2 id="a-vast" style={{ position: 'relative' }}>
                    <a href="#" className="autolink-headers before">
                        <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                    </a>
                    An Example Node.js Application
                </h2>
                <p>
                    The most common example Hello World of Node.js is a web server:
                </p>
                <img className="imglogo" src={IntroImg}></img>
                <p>
                    This code first includes the Node.js <code className="language-text">http</code><a href="https://nodejs.org/api/http.html">module</a>.
                </p>
                <p>
                    Node.js has a fantastic <a href="https://nodejs.org/api/.html">standard library</a>, including first-class support for networking.
                </p>
                <p>
                    The <code className="language-text">createServer()</code> method of <code className="language-text">http</code> creates a new HTTP server and returns it.
                </p>
                <p>
                    Whenever a new request is received, the <code className="language-text">request</code><a href="https://nodejs.org/api/http.html#http_event_request">event</a> is called, providing two objects: a request (an <code className="language-text">http.IncomingMessage</code>object) and a response (an <code className="language-text">http.ServerResponse</code>object).
                </p>
                <p>
                    Those 2 objects are essential to handle the HTTP call.
                </p>
                <p>
                    In this case with:
                </p>
                <pre className="prism-code ">
                    <div className="shell-box-top">
                        <span>JS</span>
                        <button type="button" className={tick ? "buttonticked" : ""} id="tickable" onClick={
                            () => {
                                copyCodeToClipboard();
                                buttonTicked();
                            }
                        }>{tick ? "copied" : "copy"}</button>
                    </div>
                    <div className="token-line">
                        <span className="token plain" id="copy">res.statusCode = <span className="token number">200</span> </span>
                    </div>
                    <div className="token-line">
                        <span className="token blank"> </span>
                    </div>
                </pre>


            </div>
            <ul className="list1">
                <h5>Contributors</h5>
                <li>
                    <a className="link" href="https://github.com/flaviocopes" title="flaviocopes" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/flaviocopes.png?size=60" alt='flaviocopes'></img>

                    </a>
                    <a className="link" href="https://github.com/ZYSzys" title="ZYSzys" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/MylesBorins.png?size=60" alt='ZYSzys'></img>

                    </a>
                    <a className="link" href="https://github.com/ZYSzys" title="ZYSzys" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/RomainLanz.png?size=60" alt='ZYSzys'></img>

                    </a>
                    <a className="link" href="https://github.com/ZYSzys" title="ZYSzys" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/virkt25.png?size=60" alt='ZYSzys'></img>

                    </a>
                    <a className="link" href="https://github.com/ZYSzys" title="ZYSzys" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/Trott.png?size=60" alt='ZYSzys'></img>

                    </a>
                    <a className="link" href="https://github.com/ZYSzys" title="ZYSzys" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/onel0p3z.png?size=60" alt='ZYSzys'></img>

                    </a>
                    <a className="link" href="https://github.com/ZYSzys" title="ZYSzys" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/ahmadawais.png?size=60" alt='ZYSzys'></img>

                    </a>

                </li>
            </ul>
            <div className="edit">
                <a className="link" href="https://github.com/nodejs/nodejs.dev/edit/main/src/documentation/0004-node-javascript-language/index.md">
                    <span>EDIT THIS PAGE ON GITHUB </span>
                    <svg class="icon" fill="currentColor" height="1em" width="1em" viewBox="0 0 40 40"><path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path></svg>
                </a>
            </div>

            <ul className="pagination">
                <li>
                    <Link class="link" rel="prev" to={'/'} onClick={
                        () => {
                            setIndex2("")
                            setIndex(index)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });

                        }}>← &nbsp; Prev</Link>
                </li>
                <li>
                    <Link class="link" rel="next" to={'/History'} onClick={
                        () => {
                            setIndex2("")
                            setIndex(index + 1)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }}
                    >Next &nbsp; →</Link>
                </li>
            </ul>
        </>
    )
}

export default Intro
