import React from "react";

export class Portrait extends React.Component
{
    render()
    {
        return(
            <div>
                <img src={this.props.image} alt="img"/>
            </div>
        );
    }
}