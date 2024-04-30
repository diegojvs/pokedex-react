import { PolarArea } from "react-chartjs-2";
import "chart.js/auto";
import { Stat } from "@src/models/stat";

interface BaseStatsProps {
	stats: Stat[];
}

const BaseStats: React.FC<BaseStatsProps> = ({ stats }) => {
	return (
		<>
			<h3 className="text-xl font-extrabold">Base Stats</h3>
			<div className="lg:2/6 mx-auto flex h-fit w-full flex-wrap justify-center gap-4 md:w-1/2">
				<PolarArea
					data={{
						labels: stats?.map((stat) => stat.stat.name) || [],
						datasets: [
							{
								label: "Stats",
								data: stats?.map((stat) => stat.base_stat) || [],
								backgroundColor: [
									"rgba(255, 99, 132, 0.2)",
									"rgba(54, 162, 235, 0.2)",
									"rgba(255, 206, 86, 0.2)",
									"rgba(75, 192, 192, 0.2)",
									"rgba(153, 102, 255, 0.2)",
									"rgba(255, 159, 64, 0.2)",
								],
								borderColor: [
									"rgba(255, 99, 132, 1)",
									"rgba(54, 162, 235, 1)",
									"rgba(255, 206, 86, 1)",
									"rgba(75, 192, 192, 1)",
									"rgba(153, 102, 255, 1)",
									"rgba(255, 159, 64, 1)",
								],
								borderWidth: 1,
							},
						],
					}}
					options={{
						responsive: true,
						plugins: {
							legend: {
								position: "top",
							},
						},
					}}
				/>
			</div>
		</>
	);
};

export default BaseStats;
