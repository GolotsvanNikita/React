import React from 'react';

export class StyleChanger extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            backgroundColor: 'white',
            textColor: 'black'
        };
    }

    changeColor = (bgColor, txtColor) =>
    {
        this.setState(
        {
            backgroundColor: bgColor,
            textColor: txtColor
        });
    };

    render()
    {
        const {backgroundColor, textColor} = this.state;

        const containerStyle =
        {
            backgroundColor,
            color: textColor,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
        };

        const btnStyle =
        {
            backgroundColor: textColor,
            color: backgroundColor,
            border: 'none',
            borderRadius: '24px',
            padding: '8px 14px',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            margin: '15px',
        };

        return(
            <body style={containerStyle}>
                <div>
                    <h1>TEXT</h1>
                    <div>
                        <button onClick={() => this.changeColor('#FFCCCB', 'darkred')} style={btnStyle}>
                            RED
                        </button>
                        <button onClick={() => this.changeColor('lightgreen', 'darkgreen')} style={btnStyle}>
                            GREEN
                        </button>
                        <button onClick={() => this.changeColor('lightblue', 'darkblue')} style={btnStyle}>
                            BLUE
                        </button>
                    </div>
                </div>
            </body>
        );
    }
}