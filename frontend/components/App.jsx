import React from 'react'
import { Route } from 'react-router-dom';

const App = () =>  (
    <div>
        <h1>Record Press</h1>
        <Route path ="/login" component={LoginContainer}/> 
        <Route path ="/signup/fan" component={SignUpContainer}/> 
    </div>
)

export default App; 