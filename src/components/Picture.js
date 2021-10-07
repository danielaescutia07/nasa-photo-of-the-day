import React from "react"

export default function Picture(props) {
    const { nasa } = props
    return (
        <div>
            <p>Date: {nasa.date}</p>
            <img src={nasa.url} alt='big'/>
            <h3>{nasa.title}</h3>
            <p>Copyright©{nasa.copyright}</p>
            <p>Explanation: {nasa.explanation}</p>
        </div>
    )
}