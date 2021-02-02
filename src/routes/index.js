import React from "react";
import { Redirect } from "react-router-dom";

// Dashboard
import Dashboard from "../pages/Dashboard/Dashboard";

//Reactstrap
import Alerts from "../pages/Reactstrap/Alerts";
import Badges from "../pages/Reactstrap/Badges";
import Buttons from "../pages/Reactstrap/Buttons";
import Cards from "../pages/Reactstrap/Cards";
import Forms from "../pages/Reactstrap/Forms";
import Modals from "../pages/Reactstrap/Modals";
import Tabs from "../pages/Reactstrap/Tabs";

// Charts
import LineCharts from "../pages/ApexCharts/LineCharts";
import AreaCharts from "../pages/ApexCharts/AreaCharts";
import ColumnCharts from "../pages/ApexCharts/ColumnCharts";
import BarCharts from "../pages/ApexCharts/BarCharts";

//Tables
import DatatableTables from "../pages/Tables/DatatableTables";

//Icons
import FontAwesome from "../pages/Icons/FontAwesome";

const authProtectedRoutes = [

	// Dashboard
	{ path: "/dashboard", component: Dashboard },

	// Reactstrap
	{ path: "/reactstrap-alerts", component: Alerts },
	{ path: "/reactstrap-badges", component: Badges },
	{ path: "/reactstrap-buttons", component: Buttons },
	{ path: "/reactstrap-cards", component: Cards },
	{ path: "/reactstrap-forms", component: Forms },
	{ path: "/reactstrap-modals", component: Modals },
	{ path: "/reactstrap-tabs", component: Tabs },

	//Charts
	{ path: "/charts-line", component: LineCharts },
	{ path: "/charts-area", component: AreaCharts },
	{ path: "/charts-column", component: ColumnCharts },
	{ path: "/charts-bar", component: BarCharts },

	// Tables
	{ path: "/react-datatables", component: DatatableTables },

	//Icons
	{ path: "/font-awesome-icons", component: FontAwesome },

	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [

];

export { authProtectedRoutes, publicRoutes };
