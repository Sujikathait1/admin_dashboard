import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList } from "recharts";

const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];

const DailySalesTrend = () => {
	return (
		<motion.div
			className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className="text-xl font-semibold text-gray-100 mb-4">Daily Sales Trend</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={dailySalesData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#374151" />
						<XAxis dataKey="name" stroke="#9CA3AF" />
						<YAxis stroke="#9CA3AF" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
							formatter={(value) => [`$${value.toLocaleString()}`, "Sales"]}
						/>
						<Legend wrapperStyle={{ color: "#9CA3AF" }} />

						<Bar
							dataKey="sales"
							fill="url(#salesGradient)"
							animationDuration={1500}
							isAnimationActive
						>
							<LabelList dataKey="sales" position="top" fill="#10B981" />
						</Bar>

						<defs>
							<linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="#10B981" stopOpacity={0.8} />
								<stop offset="100%" stopColor="#10B981" stopOpacity={0.4} />
							</linearGradient>
						</defs>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default DailySalesTrend;
