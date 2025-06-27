import React from "react";

export class Biography extends React.Component
{
    render()
    {
        return(
            <div className='biography'>
                <h2>Biography</h2>
                <p>{this.props.biography}</p>
            </div>
        );
    }
}