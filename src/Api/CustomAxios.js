import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3cnVvbmRwemZ2Y3lheHVuaWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3OTcyOTAsImV4cCI6MjAyMDM3MzI5MH0.oBm-yTMugBdTqLkshwHL_QsP10NvQWYMhKYXXKscm7A",
};

export const CustomAxios = axios.create({
  baseURL: "https://iwruondpzfvcyaxunihn.supabase.co/rest/v1",
  headers,
});
