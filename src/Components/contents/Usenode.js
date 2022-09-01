import React from 'react'
import { Link } from "react-router-dom";

const Usenode = ({ setIndex, setIndex2, index2 }) => {
    return (
        <div>
            <h1 className="article-reader-headline">How to use the Node.js</h1>
            <details className='toc' open>
                <summary>
                    <h6>TABLE OF CONTENTS</h6>
                </summary>
                <ul className="tableOfContents">
                    <li>
                        <a href="https://nodejs.dev/learn/how-to-use-the-nodejs-repl/#use-the-tab-to-autocomplete">Use the tab to autocomplete</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/how-to-use-the-nodejs-repl/#exploring-javascript-objects">Exploring JavaScript objects</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/how-to-use-the-nodejs-repl/#explore-global-objects">Explore global objects</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/how-to-use-the-nodejs-repl/#the-_-special-variable">The special variable</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/how-to-use-the-nodejs-repl/#dot-commands">Dot commands</a>
                    </li>

                </ul>
            </details>
            <div className="para">
                <p>
                    The <code className="language-text">node</code> command is the one we use to run our Node.js scripts:
                </p>
                <p>
                    In comparison, JavaScript is 24 years old and the Web is 31 years old.
                </p>
                <p>
                    Eleven years isn't a very long time in tech, but Node.js seems to have been around forever.
                </p>
                <p>
                    I've had the pleasure to work with Node.js since the early days when it was only 2 years old, and despite the limited information in the wild, you could already feel that it was going to be a huge thing.
                </p>
                <p>
                    In this post, we draw the big picture of Node.js in its history, to put things in perspective.
                </p>
                <p>
                    In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
                </p>
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
                    <Link class="link" rel="prev" to={'/variables'} onClick={
                        () => {
                            setIndex2(index2 - 1)
                            setIndex(5)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });

                        }}>← &nbsp; Prev</Link>
                </li>
                <li>
                    <Link class="link" rel="next" to={'/useNode'} onClick={
                        () => {
                            setIndex2(index2)
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

export default Usenode;
