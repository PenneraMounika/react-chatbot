import React from "react";

import "./AgeSelector.css"

const AgeSelector = (props) => {
    return(
            <>
            <select className='select'>
                {
                    (() => {
                        var x = []
                        for(var i = 18; i <= 40; i++) {
                            x.push(<option value={i} key={i}>{i}</option>)
                        }
                        return x
                    })()
                }
            </select>
            <div className="submit" onClick={props.actionProvider.ageHandler}>Submit</div>
        </>
    )
}

export default AgeSelector;