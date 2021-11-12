import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppsPage from '../pages/AppsPage';
import EruditeEditPage from '../pages/Erudite/EruditeEditPage';
import EruditePage from '../pages/Erudite/EruditePage';
import EruditeQuestionPage from '../pages/Erudite/EruditeQuestionPage';
import QuestionsAndAnswersPage from '../pages/QandA/QuestionsAndAnswersPage';
import { URL_APPS, URL_ERUDITE, URL_QANDA } from '../utils/consts';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={URL_APPS} component={AppsPage} />
        <Route exact path={URL_QANDA} component={QuestionsAndAnswersPage} />
        <Route exact path={URL_ERUDITE} component={EruditePage} />
        <Route
          exact
          path={`${URL_ERUDITE}/details/:id`}
          component={EruditeQuestionPage}
        />
        <Route exact path={`${URL_ERUDITE}/edit`} component={EruditeEditPage} />
        {/* <Route component={Page404} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
