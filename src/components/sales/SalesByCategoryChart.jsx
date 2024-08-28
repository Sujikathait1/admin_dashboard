import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const salesByCategory = [
	{ name: "Electronics", value: 1200 },
	{ name: "Clothing", value: 800 },
	{ name: "Home & Garden", value: 600 },
	{ name: "Books", value: 300 },
	{ name: "Beauty & Health", value: 700 },
	{ name: "Sports", value: 500 },
	{ name: "Toys", value: 400 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28"];

const SalesByCategoryChart = () => {
	return (
		<motion.div
			className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className="text-xl font-semibold text-gray-100 mb-4">Sales by Category</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={salesByCategory}
							cx="50%"
							cy="50%"
							outerRadius={100}
							fill="#8884d8"
							dataKey="value"
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{salesByCategory.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
							formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
						/>
						<Legend wrapperStyle={{ color: "#9CA3AF" }} />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SalesByCategoryChart;
