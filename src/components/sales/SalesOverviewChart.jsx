import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const monthlySalesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
	{ month: "Jul", sales: 7000 },
];

const SalesOverviewChart = () => {
	const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>

				<select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={selectedTimeRange}
					onChange={(e) => setSelectedTimeRange(e.target.value)}
				>
					<option>This Week</option>
					<option>This Month</option>
					<option>This Quarter</option>
					<option>This Year</option>
				</select>
			</div>

			<div className='w-full h-80'>
				<ResponsiveContainer>
					<AreaChart data={monthlySalesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
							formatter={(value) => `$${value.toLocaleString()}`}
						/>
						<defs>
							<linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#34D399" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#34D399" stopOpacity={0} />
							</linearGradient>
						</defs>
						<Area
							type='monotone'
							dataKey='sales'
							stroke='#34D399'
							fillOpacity={1}
							fill='url(#colorSales)'
							strokeWidth={2}
							dot={{ r: 4, stroke: '#34D399', fill: '#34D399' }}
							activeDot={{ r: 6, stroke: '#10B981', fill: '#10B981' }}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SalesOverviewChart;
