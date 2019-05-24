import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Dashboard from './containers/Device/Dashboard/Dashboard';
import Account from './containers//Account/Account';
import Error from './components/UI/ErrorHandler';

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/account' component={Account}/>
                    <Route path='/error' component={Error}/>
                    <Route path='/' exact component={Dashboard}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
