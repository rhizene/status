require.context('./assets', true)
import "./app.scss"
import scrollButton from "./js/scroll-button";
import {mediaButton, audioElement} from "./js/media-button";
import introDialog from "./js/intro-dialog";
import React from "react";
import Section from "./components/section/section";
import DetailList from "./components/detailList/detailList";

const skills = {
    "javascript"               : <>I used <em>Angular</em> and <em>Typescript</em> in my past projects. Recently learning React</>,
    "NodeJS"                   : <>As a build tool with <em>Webpack</em> or <em>Cordova</em>, or as a backend with frameworks like <em>ExpressJS</em>, I've used Node to create Web and Hybrid Mobile Apps</>,
    "Stylesheets"              : <>can be pre-compiled with <em>SASS</em>, or guided with frameworks like <em>Bootstrap</em>.</>,
    "Test Driven Development"  : <><em>Mocha JS</em> + <em>Chai</em>, <em>Sinon</em></>,
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            title: 'N I C H O L ',
            titleIndex: 0,
            incrementor: 1,
        };
    }

    render() {
        // const aside = document.getElementsByTagName('aside')[0];
        // const body = document.body;
        // body.classList.add('scroll-lock');

        // aside.appendChild(scrollButton);
        // body.appendChild(audioElement);
        // body.appendChild(mediaButton);
        // body.appendChild(introDialog);
        // introDialog.showModal();
        // scrollButton.addEventListener('click', ()=>{
        //     body.classList.remove('scroll-lock');
        // });
        // setInterval(() => this.renderTitle(), 200);

        return (<main>
            <Section title="About" description="A simple landing page converted to React." />
            <Section title="Skills" >
                <DetailList listItems={skills}></DetailList>
            </Section>
        </main>);
    }

    #updateTitleState(){
        const {titleIndex, title, incrementor} = this.state;

        let nextIncrementor = incrementor;
        if(titleIndex > title.length) {
            nextIncrementor = -1;
        } else if (titleIndex < 0) {
            nextIncrementor = 1
        }

        const nextIndex = titleIndex + incrementor;
        this.state = {...this.state,
            titleIndex: nextIndex,
            incrementor: nextIncrementor};
    }

    #getAppTitle(){
        const endIndex = this.state.titleIndex;
        const title = this.state.title;
        return title.substring(0, endIndex);
    }

    renderTitle(){
        document.title = this.#getAppTitle();
        this.#updateTitleState();
    }
}

export default App;
