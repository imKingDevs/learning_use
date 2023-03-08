import React, { useCallback, useEffect, useState } from 'react'
import Child from './Child';

function Parent() {
    
    const [cone, setcone] = useState(0)
    const [ctwo, setctwo] = useState(0)

    const updateItem = useCallback(() => {
        console.log(cone+10, ctwo+10)
    }, [ctwo, cone])
    
    return (
        <>
            <button 
                onClick={() => {setcone(cone+10)}}>
                Count +100
            </button>
            <button 
                onClick={() => {setctwo(ctwo+10)}}>
                Count -100
            </button>

            <Child updateItem={updateItem} />
            
        </>
    )
}

export default Parent