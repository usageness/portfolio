import React from 'react';
import ppic from './img/ppic.jpg';
import html_icon from './img/icon_html.png';
import js_icon from './img/icon_js.png';
import node_icon from './img/icon_node.png';
import react_icon from './img/icon_react.png';
import vue_icon from './img/icon_vue.png';
import express_icon from './img/icon_express.png';
import army_logo from './img/project_logo_army.png';
import mapleitem_logo from './img/project_logo_mapleitem.png';
import starrynight_logo from './img/project_logo_starrynight.png';
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
                <a href="#skills"> Next </a>
            </section>
            <section_white id="skills">
                <p className="subtitle">Skills</p>
                <p className="description">웹에 필요한 전반적인 지식을 바탕으로 다양한 기술을 폭 넓게 공부하고 있습니다.</p>
                <p className="name">Intermediate</p>
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
                </div>
                <p className="name">Basic</p>
                <div className="flex-center">
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
                <a href="#project"> Next </a>
            </section_white>
            <section_white id="project">
                <p className="subtitle">Projects</p>
                <div>
                    <table>
                        <tr>
                            <td>
                                2020. 01
                            </td>
                            <td>
                                <img
                                    className='rounded-circle'
                                    src={mapleitem_logo}
                                    width='120'
                                    alt='mapleitem_logo'
                                />
                            </td>
                            <td>
                                <p className="tableTitle">메이플 추가옵션 분석기</p>
                                <ul>
                                    <li>- 웹 사이트 (현재 서비스 중)</li>
                                    <li>- 온라인게임 '메이플스토리'의 아이템 가치를 분석합니다.</li>
                                    <li>- <a href="http://mapleitem.com" target="_blank">service url: mapleitem.com</a></li>
                                    <li>
                                        <span className="detailSkill">Node.js</span>
                                        <span className="detailSkill">express</span>
                                        <span className="detailSkill">bootstrap</span>
                                        <span className="detailSkill">JavaScript</span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2019. 07
                            </td>
                            <td>
                                <img
                                    className='rounded-circle'
                                    src={army_logo}
                                    width='120'
                                    alt='army_logo'
                                />
                            </td>
                            <td>
                                <p className="tableTitle">Army Q&A</p>
                                <ul>
                                    <li>- 웹 사이트</li>
                                    <li>- 군 생활에 필요한 정보를 묻고, 답할 수 있는 페이지입니다.</li>
                                    <li>- 2019 국방부오픈소스아카데미 참여 프로젝트</li>
                                    <li>- <a href="https://github.com/kyr9389/OSSCAMP_Q-A" target="_blank">Github link</a></li>
                                    <li>
                                        <span className="detailSkill">Node.js</span>
                                        <span className="detailSkill">Vue.js</span>
                                        <span className="detailSkill">element.ui</span>
                                        <span className="detailSkill">JavaScript</span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2017. 10
                            </td>
                            <td>
                                <img
                                    className='rounded-circle'
                                    src={starrynight_logo}
                                    width='120'
                                    alt='starrynight_logo'
                                />
                            </td>
                            <td>
                                <p className="tableTitle">Starry Night</p>
                                <ul>
                                    <li>- 안드로이드 어플리케이션</li>
                                    <li>- 오늘 하루를 기록하고, 소통할 수 있는 커뮤니티 앱입니다.</li>
                                    <li>- DB 서버 만료로 이용불가</li>
                                    <li>- <a href="https://github.com/kyr9389/Starry_night" target="_blank">Github link</a></li>
                                    <li>
                                        <span className="detailSkill">Android</span>
                                        <span className="detailSkill">MySQL</span>
                                        <span className="detailSkill">JAVA</span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>

            </section_white>
            <footer>

            </footer>
        </div>
    );
}

export default App;
