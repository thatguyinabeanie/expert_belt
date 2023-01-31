import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PlayersPage = lazy(() => import("./pages/players/PlayersPage"));
const TournamentsPage = lazy(()=>import("./pages/tournaments/TournamentsPage"));
const MetaAnalysisPage = lazy(() => import("./pages/meta_analysis/MetaAnalysisPage"));

const create_route = (path: string, element: React.ReactNode) => ({ path: path, element: element });


const routes = [
  create_route("/", <PlayersPage />),
  create_route("/players", <PlayersPage />),
  create_route("/tournaments", <TournamentsPage />),
  create_route("/meta_analysis", <MetaAnalysisPage />),
]
const router = createBrowserRouter(routes);

const Routing = () => (<RouterProvider router={router} />);

export default Routing;
