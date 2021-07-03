import React from 'react'

export default function Button({className,textForTheBtn}) {
    return (
       <button className={className}>{textForTheBtn}</button>
    )
}
