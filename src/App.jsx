import React, { useState } from 'react'

const App = () => {
  let [kun,setkun] = useState(0)

  const incfun = () => {
    if (kun < 20){
      setkun(kun + 1)
    }
  }

  const decrfun = () => {
    if (kun > 0) {
      setkun(kun - 1)
    }
  }

  return (
    <>
    <h1>counter is at : {kun}</h1>
    <button onClick={incfun}>+1 to counter</button>
    <br />
    <br />
    <button onClick={decrfun}>-1 to counter</button>
    </>
  )
}

export default App