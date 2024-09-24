import { FaChartSimple } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaUsers,FaDollarSign,FaShoppingCart  } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
export const SIDEBAR_ITEMS = [
    { name: "Overview", Icon: FaChartSimple, color: "#6366f1", href: "/dashboard", size:15 },
    { name: "Products", Icon: IoBagHandleSharp, color: "#8B5CF6", href: "/product", size:15 },
    { name: "Users", Icon: FaUsers , color: "#EC4899", href: "/users", size:15 },
    { name: "Sales", Icon: FaDollarSign, color: "#10B981", href: "/sales", size:15 },
    { name: "Orders", Icon: FaShoppingCart, color: "#F59E0B", href: "/orders", size:15 },
    { name: "Analytics", Icon: GrAnalytics, color: "#3B82F6", href: "/analytics", size:15 },
    { name: "Settings", Icon: IoMdSettings, color: "#6EE7B7", href: "/settings", size:15 },
];