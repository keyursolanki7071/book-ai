import AuthLayout from "@/layout/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Home from "@/pages/Home";

const routes = [
    {
      path: "/",
      Component: AuthLayout,
      children: [
        {index: true, Component: Home},
      ]
    },
    {
      path: "login",
      Component: Login
    },
    {
      path: "register",
      Component: Register
    }
  ]

export default routes;