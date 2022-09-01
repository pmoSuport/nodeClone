import React from 'react'
import { Link } from "react-router-dom";

const Engine = ({ setIndex, setIndex2, index2 }) => {
    return (
        <div>
            <h1 className="article-reader-headline">The V8 JavaScript Engine</h1>
            <details className='toc' open>
                <summary>
                    <h6>TABLE OF CONTENTS</h6>
                </summary>
                <ul className="tableOfContents">
                    <li>
                        <a href="https://nodejs.dev/learn/the-v8-javascript-engine/#other-js-engines">Other JS engines</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/the-v8-javascript-engine/#the-quest-for-performance">The quest for performance</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/the-v8-javascript-engine/#compilation">Compilation</a>
                    </li>

                </ul>
            </details>
            <div className="para">
                <p>
                    V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.
                </p>
                <p>
                    V8 provides the runtime environment in which JavaScript executes. The DOM, and the other Web Platform APIs are provided by the browser.
                </p>
                <p>
                    The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.
                </p>
                <p>
                    The Node.js ecosystem is huge and thanks to V8 which also powers desktop apps, with projects like Electron.
                </p>

                <h2 id="a-vast" style={{ position: 'relative' }}>
                    <a href="#" className="autolink-headers before">
                        <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                    </a>
                    Other JS engines
                </h2>
                <p>
                    Other browsers have their own JavaScript engine:
                </p>

                <ul className="needlist">
                    <li>Firefox has <a href="https://spidermonkey.dev/">SpiderMonkey</a></li>
                    <li>Safari has <a href="https://developer.apple.com/documentation/javascriptcore">JavaScriptCore</a> (also called Nitro)</li>
                    <li>Edge was originally based on <a href="https://github.com/chakra-core/ChakraCore">Chakra</a> but has more recently been <a href="https://support.microsoft.com/en-us/microsoft-edge/download-the-new-microsoft-edge-based-on-chromium-0f4a3dd7-55df-60f5-739f-00010dba52cf">rebuilt using Chromium</a> and the V8 engine.</li>
                </ul>

                <p>
                    and many others exist as well.
                </p>
                <p>
                    All those engines implement the <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">ECMA ES-262 standard</a>, also called ECMAScript, the standard used by JavaScript.
                </p>

                <h2 id="a-vast" style={{ position: 'relative' }}>
                    <a href="#" className="autolink-headers before">
                        <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                    </a>
                    The quest for performance
                </h2>
                <p>
                    V8 is written in C++, and it's continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.
                </p>
                <p>
                    In this V8 introduction, we will ignore the implementation details of V8: they can be found on more authoritative sites (e.g. the <a href="https://v8.dev/">V8 official site</a>), and they change over time, often radically.
                </p>
                <p>
                    V8 is always evolving, just like the other JavaScript engines around, to speed up the Web and the Node.js ecosystem.
                </p>
                <p>
                    On the web, there is a race for performance that's been going on for years, and we (as users and developers) benefit a lot from this competition because we get faster and more optimized machines year after year.
                </p>

                <h2 id="a-vast" style={{ position: 'relative' }}>
                    <a href="#" className="autolink-headers before">
                        <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                    </a>
                    Compilation
                </h2>
                <p>
                    JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.
                </p>
                <p>
                    This has been happening since 2009, when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.
                </p>
                <p>
                    JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.
                </p>
                <p>
                    This might seem counter-intuitive, but since the introduction of Google Maps in 2004, JavaScript has evolved from a language that was generally executing a few dozens of lines of code to complete applications with thousands to hundreds of thousands of lines running in the browser.
                </p>
                <p>
                    Our applications now can run for hours inside a browser, rather than being just a few form validation rules or simple scripts.
                </p>
                <p>
                    In this new world, compiling JavaScript makes perfect sense because while it might take a little bit more to have the JavaScript ready, once done it's going to be much more performant than purely interpreted code.
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
                    <Link class="link" rel="prev" to={'/differences'} onClick={
                        () => {
                            setIndex2("")
                            setIndex(4)
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });

                        }}>← &nbsp; Prev</Link>
                </li>
                <li>
                    <Link class="link" rel="next" to={'/command'} onClick={
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

export default Engine;
