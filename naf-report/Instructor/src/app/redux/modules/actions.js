// flow weak

//testHistory:

export {chooseModule} from './testHistory';
// earningGraph:
export {fetchEarningGraphDataIfNeeded} from './earningGraph';
// sideMenu:
export {
  openSideMenu,
  closeSideMenu,
  toggleSideMenu,
  getSideMenuCollpasedStateFromLocalStorage
}                                      from './sideMenu';
// teamMates:
export {fetchTeamMatesDataIfNeeded}    from './teamMates';
// userInfos:
export {fetchUserInfoDataIfNeeded}     from './userInfos';

export {fetchInstructorDataIfNeeded}   from './mostRecent';
// views:
export {
  enterHome,
  leaveHome,

  enterSimpleTables,
  leaveSimpleTables,

  enterBasicElements,
  leaveBasicElements,

  enterGeneral,
  leaveGeneral,

  enterPageNotFound,
  leavePageNotFound,

  enterStatsCard,
  leaveStatsCard,

  enterEarningGraph,
  leaveEarningGraph,

  enterNotifications,
  leaveNotifications,

  enterWorkProgress,
  leaveWorkProgress,

  enterTwitterFeed,
  leaveTwitterFeed,

  enterTeamMatesView,
  leaveTeamMatesView,

  enterTodoListView,
  leaveTodoListView,

  enterBreadcrumb,
  leaveBreadcrumb,

  enterStat,
  leaveStat,

  enterBasicProgressBar,
  leaveBasicProgressBar,

  enterTabPanel,
  leaveTabPanel,

  enterStripedProgressBar,
  leaveStripedProgressBar,

  enterAlert,
  leaveAlert,

  enterPagination,
  leavePagination
}                                     from './views';
