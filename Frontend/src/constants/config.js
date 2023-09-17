// Api_Notification_Messages
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}

// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/api", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    getUser: { url: '/user', method: 'GET' }, // "email", "password"
    userLogin: { url: '/user/login', method: 'POST' }, // "email", "password"
    userSignup: { url: '/user/signup', method: 'POST' }, // "name", "email", "password"
    userLogout: { url: '/user/logout', method: 'PUT' }, // "refreshToken"
}