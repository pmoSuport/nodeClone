import React from 'react'
import { Link } from "react-router-dom";

const Install = ({ index, setIndex, setIndex2 }) => {
    return (
        <>
            <h1 className="article-reader-headline">How to install Node.js</h1>

            <div className="para">
                <p>
                    Node.js can be installed in different ways. This post highlights the most common and convenient ones.
                </p>
                <p>
                    Official packages for all the major platforms are available at <a href=' https://nodejs.dev/download/'>https://nodejs.dev/download/</a>.
                </p>
                <p>
                    One very convenient way to install Node.js is through a package manager. In this case, every operating system has its own.
                </p>
                <p>
                    Other package managers for MacOS, Linux, and Windows are listed in <a href="https://nodejs.dev/download/package-manager/">https://nodejs.dev/download/package-manager/</a>
                </p>
                <p>
                    <code className="language-text">nvm</code>
                    is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks, for example.
                </p>
                <p>
                    It is also very useful to test your code with old Node.js versions.
                </p>
                <p>
                    See <a href="https://github.com/nvm-sh/nvm">https://github.com/nvm-sh/nvm</a> for more information about this option.
                </p>
                <p>
                    In any case, when Node.js is installed you'll have access to the <code className="language-text">node</code> executable program in the command line.
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
                    <a className="link" href="https://github.com/ZYSzys" title="ZYSzys" target="_blank" rel="noopener noreferrer">
                        <img className="img" src="https://github.com/ahmadawais.png?size=60" alt='ZYSzys'></img>

                    </a>

                </li>
            </ul>
            <ul className="pagination">
                <li>
                    <Link class="link" rel="prev" to={'/History'} onClick={
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
                    <Link class="link" rel="next" to={'/need'} onClick={
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

export default Install
