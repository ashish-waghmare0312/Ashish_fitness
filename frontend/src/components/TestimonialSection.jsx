import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import TestimonialCard from './marketing/TestimonialCard';
import Autoplay from "embla-carousel-autoplay";

const TestimonialSection = ({siteContent}) => {
  return (
		<div className="mt-10">
			<Carousel
				opts={{
					align: "start",
					loop: true, // Infinitely loop the carousel
				}}
				plugins={[
					Autoplay({
						delay: 2000, // Time (in ms) before auto-scrolling to next item
						stopOnInteraction: false, // Don't stop when user interacts
						stopOnMouseEnter: true, // Pause when user hovers over the carousel
						direction: "backward", // This sets the scroll direction to right-to-left
					}),
				]}
				// Adjust width as needed, and add overflow-hidden
				className="w-full max-w-5xl mx-auto overflow-hidden">
				<CarouselContent className="-ml-6">
					{siteContent.testimonials.items.map((t, idx) => (
						<CarouselItem
							key={idx}
							className="pl-6 md:basis-1/2 lg:basis-1/3">
							{/* p-1 is often used for outline/focus styles, h-full helps align cards */}
							<div className="p-1 h-full">
								<TestimonialCard
									author={t.author}
									text={t.text}
									highlights={t.highlights}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{/* We can omit <CarouselPrevious /> and <CarouselNext /> for a clean, automatic-only look */}
			</Carousel>
		</div>
	);
}

export default TestimonialSection