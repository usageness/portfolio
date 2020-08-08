import React from 'react';
import './App.css';

import Main from './page/main';
import About from './page/about';
import Skills from './page/skills';
import Project from './page/project';

function App() {
    return (
        <div className="App">
            <Main/>
            <About/>
            <Skills/>
            <Project/>
            <footer>
            </footer>
        </div>
    );
}

export default App;
