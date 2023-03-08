import React, { useEffect, useState } from 'react'

function Child({updateItem}) {

    const [update, setupdate] = useState([])
    useEffect(() => {
      setupdate(updateItem);
    }, [updateItem])
    
    return (
        <>

        </>
    )
}

export default Child