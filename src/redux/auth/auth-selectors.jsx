const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const Selectors = {
    getIsAuthenticated,
    getUserName,
};

export default Selectors;