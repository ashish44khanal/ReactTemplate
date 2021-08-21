import React from 'react'
import Nav from '../nav/Nav'

function Page( props ) {
    return (
        <div>
            <Nav />
            {props.children}
            {/* footer  */}
        </div>
    )
}

export default Page
