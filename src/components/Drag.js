import React from 'react'

function Drag({ mode, setMode}) {
    return (
        <section className={ mode ? "darkmode footer" : "block footer"}>
            <p className={ mode ? "darkmode footer__text" : "footer__text"}>
                Drag and drop [text] to reorder list
            </p>
        </section>
    )
}

export default Drag
