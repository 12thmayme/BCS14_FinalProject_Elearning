import React from "react";
import "../src/sass/main.scss";
import "./main.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomeMaster from "./pages/pageMaster/HomeMaster.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import UserMaster from "./pages/pageMaster/UserMaster.jsx";
import Login from "./pages/account/Login.jsx";
import Signup from "./pages/account/Signup.jsx";
import Detail from "./pages/detail/Detail.jsx";
import Profile from "./pages/account/profile/Profile.jsx";
import Contact from "./pages/contact/contact.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} position="bottom" />
        <Routes>
          <Route path="" element={<HomeMaster />}>
            <Route path="home" element={<HomePage />}></Route>
            <Route index element={<HomePage />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="/detail">
              <Route path=":productID" element={<Detail />}></Route>
            </Route>
          </Route>
          <Route path="users">
            <Route path="" element={<UserMaster />}>
              <Route index path="login" element={<Login />} />
              <Route path="sign-up" element={<Signup />}></Route>
            </Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
