import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@src/pages/home/index.tsx";
import Pokemon from "./pages/pokemon";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: ":pokemon",
		element: <Pokemon />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
