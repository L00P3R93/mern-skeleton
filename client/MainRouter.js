import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/SignIn'



const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
            </Switch>
        </div>
    )
}


export default MainRouter