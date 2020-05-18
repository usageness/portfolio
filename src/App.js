import React from 'react';
import ppic from './img/ppic.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Headline">
                    <p>Front-End Developer</p>
                </div>
                <a
                    className="App-link"
                    href="#about"
                    rel="noopener noreferrer"
                >
                    view more
                </a>
            </header>
            <section id="about">
                <p className="subtitle">About</p>
                <div className="profile">
                    <p className="eachdiv">
                        <img
                            src={ppic}
                            width='300'
                            alt='profile picture'
                        />
                    </p>
                    <p className="eachdiv">
                        <ul>
                            <li className="name">김용래_usage</li>
                            <li className="description">Front-end developer</li>
                            <li className="description">1997.07.27</li>
                        </ul>
                        <ul className="mt-3">
                            <li className="description"><a href="mailto:kyr9389@naver.com"><i className="fa fa-envelope" aria-hidden="true"></i>kyr9389@naver.com</a></li>
                            <li className="description"><a href="https://github.com/kyr9389"><i className="fa fa-github" aria-hidden="true"></i>https://github.com/kyr9389</a></li>
                        </ul>

                    </p>
                </div>
            </section>
            <footer>

            </footer>
        </div>
    );
}

export default App;
