export const localService = {
    // Get user token
    getAccessToken: () => localStorage.getItem("accessToken") || null,

    // Save user token
    setAccessToken: (token) => {
        localStorage.setItem("accessToken", token);
    },

    // Remove user token
    removeAccessToken: () => {
        localStorage.removeItem("accessToken");
    },

    // Save user information
    setUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    },

    // Get user information
    getUser: () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    },

    // Remove user
    removeUser: () => {
        localStorage.removeItem("user");
    },
};