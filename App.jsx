import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
import Search from './Search'
import Service from './Service'
const App = () => {
    const Name = () => {
        return (
            <h1>I am Name Page</h1>
        )

    }
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path="/search" component={Search} />
                <Route path="/contact/name" component={Name} />
                <Route exact path='/service' component={Service} />
                <Route component={Error} />
            </Switch>
        </>
    )
}
export default App