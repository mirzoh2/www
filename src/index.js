import React from 'react';

import * as ReactDOMClient from "react-dom/client"


const root = ReactDOMClient.createRoot(document.getElementById('root'))

let div = <div className='vax'></div>

class Input extends React.Component {

render() {
  return(
    <input placeholder='fsfsfsfsf'></input>
  )
}
    
  
}



root.render(<Input />)