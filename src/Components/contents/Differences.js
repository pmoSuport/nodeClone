import React from 'react'
import { Link } from "react-router-dom";

const Differences = ({ index, setIndex, setIndex2, index2 }) => {
    return (
        <div>
            <h1 className="article-reader-headline">Differences between Node.js and the Browser</h1>

            <div className="para">
                <p>
                    Both the browser and Node.js use JavaScript as their programming language.
                </p>
                <p>
                    Building apps that run in the browser is a completely different thing than building a Node.js application.
                </p>
                <p>
                    Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.
                </p>
                <p>
                    From the perspective of a frontend developer who extensively uses JavaScript, Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language.
                </p>
                <p>
                    You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language, and by using the same language to perform all your work on the web - both on the client and on the server, you're in a unique position of advantage.
                </p>
                <p>
                    What changes is the ecosystem.
                </p>
                <p>
                    In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the <code className="language-text">document</code>, <code className="language-text">window</code>and all the other objects that are provided by the browser.
                </p>
                <p>
                    And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.
                </p>
                <p>
                    Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient.
                </p>
                <p>
                    This means that you can write all the modern ES6-7-8-9 JavaScript that your Node.js version supports.
                </p>
                <p>
                    Since JavaScript moves so fast, but browsers can be a bit slow to upgrade, sometimes on the web you are stuck with using older JavaScript / ECMAScript releases.
                </p>
                <p>
                    You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won't need that.
                </p>
                <p>
                    Another difference is that Node.js uses the CommonJS module system, while in the browser we are starting to see the ES Modules standard being implemented.
                </p>
                <p>
                    In practice, this means that for the time being you use <code className="language-text">require ( )</code> in Node.js and <code className="language-text">import</code> in the browser.
                </p>

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

                    </li>
                </ul>

                <div className="edit">
                    <a className="link" href="https://github.com/nodejs/nodejs.dev/edit/main/src/documentation/0004-node-javascript-language/index.md">
                        <span>EDIT THIS PAGE ON GITHUB </span>
                        <svg class="icon" fill="currentColor" height="1em" width="1em" viewBox="0 0 40 40"><path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path></svg>
                    </a>
                </div>



            </div>
            <ul className="pagination">
                <li>
                    <Link class="link" rel="prev" to={'/need'} onClick={
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
                    <Link class="link" rel="next" to={'/Engine'} onClick={
                        () => {
                            setIndex2(0)
                            setIndex(5)
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

export default Differences;
