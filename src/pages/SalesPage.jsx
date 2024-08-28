import { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
	totalRevenue: { value: "$1,234,567", progress: 80 },
	averageOrderValue: { value: "$78.90", progress: 50 },
	conversionRate: { value: "3.45%", progress: 70 },
	salesGrowth: { value: "12.3%", progress: 90 },
};

const SalesPage = () => {
	const [dateRange, setDateRange] = useState("Last 30 Days");

	const handleDateRangeChange = (e) => {
		setDateRange(e.target.value);
		// Implement logic to update data based on date range
	};

	return (
		<div className="flex-1 overflow-auto relative z-10">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<Header title="Sales Dashboard" />
			</motion.div>

			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				{/* Date Range Filter */}
				<div className="mb-6 flex justify-end">
					<select
						className="p-2 border rounded-md text-gray-700"
						value={dateRange}
						onChange={handleDateRangeChange}
					>
						<option>Last 7 Days</option>
						<option>Last 30 Days</option>
						<option>Last 90 Days</option>
						<option>Year to Date</option>
					</select>
				</div>

				{/* SALES STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{Object.entries(salesStats).map(([key, stat], index) => (
						<motion.div
							whileHover={{ scale: 1.05 }}
							key={index}
							className="shadow-lg rounded-lg"
						>
							<StatCard
								name={key.replace(/([A-Z])/g, " $1")}
								icon={key === "totalRevenue" ? DollarSign : key === "averageOrderValue" ? ShoppingCart : key === "conversionRate" ? TrendingUp : CreditCard}
								value={stat.value}
								color={index % 2 === 0 ? "#6366F1" : "#10B981"}
								valueColor={index % 2 === 0 ? "text-blue-500" : "text-green-500"}
								tooltip={`This is the ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`}
							/>
							<div className="px-4 py-2">
								<div className="relative pt-1">
									<div className="flex mb-2 items-center justify-between">
										<div>
											<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
												Progress
											</span>
										</div>
									</div>
									<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
										<div
											style={{ width: `${stat.progress}%` }}
											className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
										></div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<SalesOverviewChart />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>

				{/* NEW SECTION: Recent Transactions */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						Recent Transactions
					</h2>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-600">
										Transaction ID
									</th>
									<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-600">
										Customer
									</th>
									<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-600">
										Amount
									</th>
									<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-600">
										Status
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
										#12345
									</td>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
										John Doe
									</td>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-green-600">
										$250.00
									</td>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
										Completed
									</td>
								</tr>
								<tr>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
										#12346
									</td>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
										Jane Smith
									</td>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-red-600">
										$120.00
									</td>
									<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
										Failed
									</td>
								</tr>
								{/* Add more rows as needed */}
							</tbody>
						</table>
					</div>
				</section>
			</main>
		</div>
	);
};

export default SalesPage;
