// @flow weak

import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import earningGraph         from './earningGraph';
import sideMenu             from './sideMenu';
import userInfos            from './userInfos';
import teamMates            from './teamMates';
import views                from './views';
import userAuth             from './userAuth';
import testHistory			from './testHistory';
import mostRecent			from './mostRecent';
export const reducers = {
  testHistory,
  earningGraph,
  sideMenu,
  userInfos,
  teamMates,
  views,
  userAuth,
  mostRecent,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
