import React from 'react'

const App = () =>  (
    <div>
        <h1>Record Pressy</h1>
        <Route path ="/login" component={LoginFormContainer}/> 
        <Route path ="/signup" component={SignupFormContainer}/> 
    </div>
)

export default App; 