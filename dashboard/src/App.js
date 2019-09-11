import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import SubmitNewScanPage from './pages/SubmitNewScanPage';
import ListRepositoryPage from './pages/ListRepositoryPage';
import FindingViewPage from './pages/FindingViewPage';

export default function App() {
    return (
        <Switch>
          <Route exact path="/" component={SubmitNewScanPage} />
          <Route exact path="/repositories" component={ListRepositoryPage} />
          <Route path="/repositories/:id/findings" component={FindingViewPage} />
        </Switch>
    ); 
}
