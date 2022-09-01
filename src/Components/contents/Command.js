import React, { useState } from 'react'
import { Link } from "react-router-dom";


const Command = ({ setIndex, setIndex2, index2 }) => {
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
        setTick(true)
        setTimeout(function () {

            setTick(false)

        }, 3000);
    }
    return (
        <div>
            <h1 className="article-reader-headline">Run Node.js scripts from the command line</h1>

            <div className="para">
                <p>
                    The usual way to run a Node.js program is to run the <code className="language-text">node</code> globally available command (once you install Node.js) and pass the name of the file you want to execute.
                </p>
                <p>
                    If your main Node.js application file is <code className="language-text">app.js</code>, you can call it by typing:
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
                        <span className="token plain" id="copy">node <span className="token number">app.js</span> </span>
                    </div>
                    <div className="token-line">
                        <span className="token blank"> </span>
                    </div>
                </pre>

                <p>
                    While running the command, make sure you are in the same directory which contains the <code className="language-text">app.js</code> file.
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
                    <Link class="link" rel="prev" to={'/Engine'} onClick={
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
                    <Link class="link" rel="next" to={'/exit'} onClick={
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

export default Command;
