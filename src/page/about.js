import ppic from "../img/ppic.jpg";
import React from "react";

function about() {
    return (
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
                        <li className="description mt-3"><a href="mailto:kyr9389@naver.com"><i className="fa fa-envelope" aria-hidden="true"></i>kyr9389@naver.com</a></li>
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
            <p className="mb-3"> <a href="#skills"> Next </a></p>
        </section>
    )
}

export default about;