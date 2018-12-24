import * as React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import Shici from './containers/Shici'

export default (
  <Route path="/" component={App}>
    {/* <Route path="/:login"
           component={UserPage} />
    <Route path="/:login/:name"
           component={RepoPage} /> */}
    <Route path="/shici"
      component={Shici} />
  </Route>
)
