import axios from "axios";

// TokenCybersoft provided by the API documentation
const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxNCIsIkhldEhhblN0cmluZyI6IjIwLzA0LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NTEwNzIwMDAwMCIsIm5iZiI6MTcyMDcxNzIwMCwiZXhwIjoxNzQ1MjU0ODAwfQ.ausAdd72XdIU4PeMk3pQrAFbrDseUSOVNZMlQ4VSy-E"; // Replace with your real token

// Create Axios instance
export const apiInstance = axios.create({
    baseURL: "https://elearningnew.cybersoft.edu.vn/api", // Base API URL
    headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        "Content-Type": "application/json",
    },
});

// Add a request interceptor for attaching tokens dynamically (if needed)
apiInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);