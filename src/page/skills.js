import html_icon from "../img/icon_html.png";
import js_icon from "../img/icon_js.png";
import node_icon from "../img/icon_node.png";
import express_icon from "../img/icon_express.png";
import vue_icon from "../img/icon_vue.png";
import react_icon from "../img/icon_react.png";
import React from "react";

function skills() {
    return (
        <section_white id="skills">
            <p className="subtitle">Skills</p>
            <p className="description">웹에 필요한 전반적인 지식을 바탕으로 다양한 기술을 폭 넓게 공부하고 있습니다.</p>
            <p className="name">Intermediate</p>
            <div className="flex-center">

                <div className="skillset">
                    <img
                        className='rounded-circle'
                        src={html_icon}
                        width='100'
                        alt='html/css icon'
                    />
                    <p>HTML / CSS</p>
                </div>
                <div className="skillset">
                    <img
                        className='rounded-circle'
                        src={js_icon}
                        width='100'
                        alt='JavaScript icon'
                    />
                    <p>JavaScript</p>
                </div>
                <div className="skillset">
                    <img
                        className='rounded-circle'
                        src={node_icon}
                        width='100'
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
                        width='100'
                        alt='Express icon'
                    />
                    <p>Express</p>
                </div>
                <div className="skillset">
                    <img
                        className='rounded-circle'
                        src={vue_icon}
                        width='100'
                        alt='Vue.js icon'
                    />
                    <p>Vue.js</p>
                </div>
                <div className="skillset">
                    <img
                        className='rounded-circle'
                        src={react_icon}
                        width='100'
                        alt='React icon'
                    />
                    <p>React</p>
                </div>
            </div>
            <p className="mb-3"><a href="#project"> Next </a></p>
        </section_white>
    )
}

export default skills;