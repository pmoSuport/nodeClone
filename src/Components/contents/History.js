import React from 'react'
import { Link } from "react-router-dom";

const History = ({ index, setIndex, setIndex2 }) => {
    return (
        <div>
            <h1 className="article-reader-headline">A brief history of Node.js</h1>
            <details className='toc' open>
                <summary>
                    <h6>TABLE OF CONTENTS</h6>
                </summary>
                <ul className="tableOfContents">
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#a-little-bit-of-history">A little bit of history</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2009">2009</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2010">2010</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2011">2011</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2012">2012</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2013">2013</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2014">2014</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2015">2015</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2016">2016</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2017">2017</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2018">2018</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2019">2019</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2020">2020</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2021">2021</a>
                    </li>


                </ul>
            </details>
            <div className="para">
                <p>
                    Believe it or not, Node.js is only eleven years old.
                </p>
                <p>
                    In comparison, JavaScript is <a href="https://en.wikipedia.org/wiki/JavaScript#Beginnings_at_Netscape">24 years old</a> and the Web is <a href="https://howoldistheinter.net/">31 years old</a>.
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

                <h2 id="a-vast" style={{ position: 'relative' }}>
                    <a href="#" className="autolink-headers before">
                        <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                        </svg>
                    </a>
                    A little bit of history
                </h2>

                <p>
                    JavaScript is a programming language that was created at Netscape as a scripting tool to manipulate web pages inside their browser,  <a href="https://en.wikipedia.org/wiki/Netscape_Navigator">Netscape Navigator</a>.
                </p>
                <p>
                    Part of the business model of Netscape was to sell Web Servers, which included an environment called Netscape LiveWire that could create dynamic pages using server-side JavaScript. Unfortunately, Netscape LiveWire wasn't very successful and server-side JavaScript wasn't popularized until recently, by the introduction of Node.js.
                </p>
                <p>
                    One key factor that led to the rise of Node.js was the timing. Just a few years earlier, JavaScript had started to be considered as a more serious language, thanks to "Web 2.0" applications (such as Flickr, Gmail, etc.) that showed the world what a modern experience on the web could be like.
                </p>
                <p>
                    JavaScript engines also became considerably better as many browsers competed to offer users the best performance. Development teams behind major browsers worked hard to offer better support for JavaScript and find ways to make JavaScript run faster. The engine that Node.js uses under the hood, V8 (also known as Chrome V8 for being the open-source JavaScript engine of The Chromium Project), improved significantly due to this competition.
                </p>
                <p>
                    Node.js happened to be built in the right place and right time, but luck isn't the only reason why it is popular today. It introduces a lot of innovative thinking and approaches for JavaScript server-side development that have already helped many developers.
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
                    <Link class="link" rel="prev" to={'/'} onClick={
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
                    <Link class="link" rel="next" to={'/install'} onClick={
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

export default History
