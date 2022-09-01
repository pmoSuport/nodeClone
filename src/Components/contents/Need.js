import React from 'react'
import { Link } from "react-router-dom";

const Need = ({ index, setIndex, setIndex2 }) => {
    return (
        <div>
            <h1 className="article-reader-headline">How much JavaScript do you need to know to use Node.js?</h1>

            <div className="para">
                <p>
                    As a beginner, it's hard to get to a point where you are confident enough in your programming abilities.
                </p>
                <p>
                    While learning to code, you might also be confused at where does JavaScript end, and where Node.js begins, and vice versa.
                </p>
                <p>
                    I would recommend you to have a good grasp of the main JavaScript concepts before diving into Node.js:
                </p>
                <ul className="needlist">
                    <li>Lexical Structure</li>
                    <li>Expressions</li>
                    <li>Types</li>
                    <li>Classes</li>
                    <li>Variables</li>
                    <li>Functions</li>
                    <li>this</li>
                    <li>Arrow Functions</li>
                    <li>Loops</li>
                    <li>Scopes</li>
                    <li>Arrays</li>
                    <li>Template Literals</li>
                    <li>Semicolons</li>
                    <li>Strict Mode</li>
                    <li>ECMAScript 6, 2016, 2017</li>

                </ul>
                <p>
                    With those concepts in mind, you are well on your road to become a proficient JavaScript developer, in both the browser and in Node.js.
                </p>
                <p>
                    The following concepts are also key to understand asynchronous programming, which is one fundamental part of Node.js:
                </p>

                <ul className="needlist">
                    <li><a href="https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks">Asynchronous programming and callbacks</a></li>
                    <li><a href="https://nodejs.dev/learn/discover-javascript-timers">Timers</a></li>
                    <li><a href="https://nodejs.dev/learn/understanding-javascript-promises">Promises</a></li>
                    <li><a href="https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await">Async and Await</a></li>
                    <li>Closures</li>
                    <li><a href="https://nodejs.dev/learn/the-nodejs-event-loop">The Event Loop</a></li>
                </ul>

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
                    <Link class="link" rel="prev" to={'/install'} onClick={
                        () => {
                            setIndex2("")
                            setIndex(index - 1)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });

                        }}>← &nbsp; Prev</Link>
                </li>
                <li>
                    <Link class="link" rel="next" to={'/differences'} onClick={
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



        </div>
    )
}

export default Need
