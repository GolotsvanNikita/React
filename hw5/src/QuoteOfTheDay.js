import React from "react";
import {Quote} from "./Quote";
import './QuoteOfTheDay.css';

export class QuoteOfTheDay extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            isVisible: false
        };
    }

    toggleQuote = () =>
    {
        this.setState((prev) =>
        ({
            isVisible: !prev.isVisible
        }));
    };

    render()
    {
        return(
            <div className='container'>
                <h1>Quote of the Day</h1>
                <button onClick={() => this.toggleQuote()}>
                    Quote
                </button>
                {this.state.isVisible &&
                    (
                        <Quote
                            quote='The only way to do great work is to love what you do. — Steve Jobs'
                        />
                    )}
            </div>
        );
    }
}