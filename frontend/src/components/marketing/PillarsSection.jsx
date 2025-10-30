"use client";

import React from "react";
import {
	Dumbbell,
	Shield,
	Apple,
	TrendingUp,
	Video,
	Brain,
	GraduationCap,
	Icon as LucideIcon, // Import Icon type for type safety
} from "lucide-react";

const PILLARS= [
	{
		icon: Dumbbell,
		text: "Personalized workout programming...",
		colorClass: "af-bento-icon-lime",
	},
	{
		icon: Shield,
		text: "Safe, efficient hypertrophy training...",
		colorClass: "af-bento-icon-lime",
	},
	{
		icon: Apple,
		text: "Nutrition plans built on macros...",
		colorClass: "af-bento-icon-lime",
	},
	{
		icon: TrendingUp,
		text: "Weekly progress tracking...",
		colorClass: "af-bento-icon-lime",
	},
	{
		icon: Video,
		text: "Technique correction via video...",
		colorClass: "af-bento-icon-lime",
	},
	{
		icon: Brain,
		text: "Habit and mindset coaching...",
		colorClass: "af-bento-icon-lime",
	},
	{
		icon: GraduationCap,
		text: "Science-based education...",
		colorClass: "af-bento-icon-lime",
	},
];

// Function to calculate position on a circle
const calculatePosition = (
	index,
	totalItems,
	radiusPercent
) => {
	const angleDegrees = (360 / totalItems) * index - 90; // Start from top (-90 degrees)
	const angleRadians = angleDegrees * (Math.PI / 180);
	const x = 50 + radiusPercent * Math.cos(angleRadians); // 50% is center
	const y = 50 + radiusPercent * Math.sin(angleRadians); // 50% is center
	return { x, y };
};

export default function PillarsSectionCircular() {
	const radius = 48; // Adjust radius (percentage of container width/height)
	const totalItems = PILLARS.length;

	return (
		<section id="pillars" className="py-20 overflow-hidden">
			<div className="mx-auto max-w-5xl px-6 md:px-8">
				{/* Titles */}
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-2">
					{" "}
					{/* Adjusted color */}
					Evidence-Based Coaching Pillars
				</h2>
				<p className="text-center text-black mb-16 md:mb-24 text-sm md:text-base">
					{" "}
					{/* Adjusted color */}
					Seven core principles that drive real, sustainable results
				</p>

				{/* Circular Layout Container */}
				<div className="relative w-full max-w-xl md:max-w-2xl aspect-square mx-auto">
					{" "}
					{/* aspect-square keeps it circular */}
					{/* Optional: Central Element */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center p-4">
						<span className="text-4xl font-semibold text-blue-900 ">
							Core Principles
						</span>
						{/* You could add a central icon here too */}
					</div>
					{PILLARS.map((item, index) => {
						const IconComponent = item.icon;
						const { x, y } = calculatePosition(index, totalItems, radius);

						return (
							<div
								key={index}
								className="absolute w-32 h-32 md:w-[14em] md:h-[8em] flex flex-col items-center justify-center text-center p-4 rounded-full bg-[#FDAA48]/10 border border-[#FDAA48] shadow-lg" // Item styling
								style={{
									top: `${y}%`,
									left: `${x}%`,
									transform: "translate(-50%, -50%)", // Center the item on its calculated point
								}}>
								{/* Icon */}
								<div
									className={`mb-1 md:mb-2 p-2 rounded-full bg-[#FDAA48]/20`}>
									{" "}
									{/* Consistent color */}
									<IconComponent
										className="w-8 h-8 md:w-8 md:h-8 text-[#FDAA48]"
										aria-hidden
									/>
								</div>
								{/* Text */}
								<span className="text-xs md:text-sm text-blue-900 leading-tight">
									{" "}
									{/* Adjusted text color */}
									{item.text.split(" ").slice(0, 4).join(" ")}...{" "}
									{/* Truncate text */}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
