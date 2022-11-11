import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../styles/global.scss";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Layout = lazy(() => import("../containers/Layout"));
const Login = lazy(() => import("../pages/Login"));
const PasswordRecovery = lazy(() => import("../pages/PasswordRecovery"));
const SendEmail = lazy(() => import("../pages/SendEmail"));
const NewPassword = lazy(() => import("../pages/NewPassword"));
const MyAccount = lazy(() => import("../pages/MyAccount"));
const CreateAccount = lazy(() => import("../pages/CreateAccount"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Orders = lazy(() => import("../pages/Orders"));

const Products = lazy(() => import("../pages/Products"));
const Faq = lazy(() => import("../pages/Faq"));

const Loading = lazy(() => import("../components/Loading"));

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        {" "}
        {/* basename='/react-shop' */}
        <Suspense fallback={<Loading />}>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/recovery-password"
                element={<PasswordRecovery />}
              />
              <Route exact path="/send-email" element={<SendEmail />} />
              <Route exact path="/new-password" element={<NewPassword />} />
              <Route exact path="/account" element={<MyAccount />} />
              <Route exact path="/signup" element={<CreateAccount />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/orders" element={<Orders />} />
              <Route exact path="/faq" element={<Faq />} />


              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
