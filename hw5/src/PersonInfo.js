import React from "react";

export class PersonInfo extends React.Component
{
    render()
    {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>Birth Date: {this.props.birth}</p>
            </div>
        );
    }
}