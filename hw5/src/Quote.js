import React from "react";

export class Quote extends React.Component
{
    render()
    {
        return(
            <div className='quote'>
                <p>{this.props.quote}</p>
            </div>
        );
    }
}