 const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;
 
const isRefreshingCurrent = state => state.auth.isRefreshing

export const authSelectors = {
    getIsLoggedIn,
    getUserName,
    isRefreshingCurrent,
}