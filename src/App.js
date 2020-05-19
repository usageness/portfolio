import React from 'react';
import ppic from './img/ppic.jpg';
import html_icon from './img/icon_html.png';
import js_icon from './img/icon_js.png';
import node_icon from './img/icon_node.svg';
import react_icon from './img/icon_react.svg';
import vue_icon from './img/icon_vue.png';
import express_icon from './img/icon_express.png';
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
                        <ul className="mt-8">
                            <li className="description"><a href="mailto:kyr9389@naver.com"><i className="fa fa-envelope" aria-hidden="true"></i>kyr9389@naver.com</a></li>
                            <li className="description"><a href="https://github.com/kyr9389"><i className="fa fa-github" aria-hidden="true"></i>https://github.com/kyr9389</a></li>
                        </ul>
                    </p>
                    <p className="eachdiv">
                        <ul>
                            <li className="name">Education</li>
                            <li className="description">서울과학기술대학교 컴퓨터공학과</li>
                            <li className="sub_description">2017.03 ~ 재학중</li>
                            <li className="description">국방부오픈소스아카데미</li>
                            <li className="sub_description">2019.07 ~ 2019.10</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section_white id="skills" className="">
                <p className="subtitle">Skills</p>
                <p className="description">웹에 필요한 전반적인 지식을 바탕으로 다양한 기술을 폭 넓게 공부하고 있습니다.</p>
                <div className="flex-center">
                    <div className="skillset">
                        <img
                            className='rounded-circle'
                            src={html_icon}
                            width='150'
                            alt='html/css icon'
                        />
                        <p>HTML / CSS</p>
                    </div>
                    <div className="skillset">
                        <img
                            className='rounded-circle'
                            src={js_icon}
                            width='150'
                            alt='JavaScript icon'
                        />
                        <p>JavaScript</p>
                    </div>
                    <div className="skillset">
                        <img
                            className='rounded-circle'
                            src={node_icon}
                            width='150'
                            alt='Node.js icon'
                        />
                        <p>Node.js</p>
                    </div>
                    <div className="skillset">
                        <img
                            className='rounded-circle'
                            src={express_icon}
                            width='150'
                            alt='Express icon'
                        />
                        <p>Express</p>
                    </div>
                    <div className="skillset">
                        <img
                            className='rounded-circle'
                            src={vue_icon}
                            width='150'
                            alt='Vue.js icon'
                        />
                        <p>Vue.js</p>
                    </div>
                    <div className="skillset">
                        <img
                            className='rounded-circle'
                            src={react_icon}
                            width='150'
                            alt='React icon'
                        />
                        <p>React</p>
                    </div>
                </div>
            </section_white>
            <footer>

            </footer>
        </div>
    );
}

export default App;
