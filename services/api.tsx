// services/api.tsx

import axios from "axios";

// Define the base URL for your API
const API_BASE_URL = "https://your-api-url.com"; // Replace with your actual API URL

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Account API methods
export const account = {
  // Sign up a new user
  create: async (email: string, password: string) => {
    try {
      // API endpoint for user signup
      const response = await api.post("/auth/signup", {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Signup failed");
    }
  },

  // Add other account-related functions if needed, such as login or fetching user data
  login: async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },
};
