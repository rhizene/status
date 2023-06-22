require.context('./assets', true)
import "./app.scss"
import scrollButton from "./js/scroll-button";
import {mediaButton, audioElement} from "./js/media-button";
import introDialog from "./js/intro-dialog";
import { createRoot } from 'react-dom/client';
import React from "react";
import Section from "./components/section/section";

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
            <Section title="Skills" description="Todo - list-section." />
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
