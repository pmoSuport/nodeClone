import React from 'react'
import { Link } from "react-router-dom";

const Exit = ({ setIndex, setIndex2, index2 }) => {
    return (
        <div>
            <h1 className="article-reader-headline">How to exit from a Node.js program</h1>

            <div className="para">
                <p>
                    There are various ways to terminate a Node.js application.
                </p>
                <p>
                    When running a program in the console you can close it with <code className="language-text">ctrl-C</code>, but what we want to discuss here is programmatically exiting.
                </p>
                <p>
                    Let's start with the most drastic one, and see why you're better off not using it.
                </p>
                <p>
                    The <code className="language-text">process</code> core module provides a handy method that allows you to programmatically exit from a Node.js program: <code className="language-text">process.exit( )</code>.
                </p>
                <p>
                    When Node.js runs this line, the process is immediately forced to terminate.
                </p>
                <p>
                    This means that any callback that's pending, any network request still being sent, any filesystem access, or processes writing to <code className="language-text">stdout</code> or <code className="language-text">stderr</code> - all is going to be ungracefully terminated right away.
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
                    <Link class="link" rel="prev" to={'/command'} onClick={
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
                    <Link class="link" rel="next" to={'/variables'} onClick={
                        () => {
                            setIndex2(index2 + 1)
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

export default Exit;
