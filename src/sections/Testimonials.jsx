import { testimonials } from "../constants/index";
import TestimonialItem from "../components/TestimonialItem";

const Testimonials = () => {
	const halfLength = Math.floor(testimonials.length / 2);

	return (
		<section className="relative z-2 py-24 md:py-28 lg:py-40">
			<div className="container block lg:flex">
				<div className="testimonials_head-res relative z-2 mr-20 flex-300">
					<p className="caption mb-5 max-md:mb-2.5">Depoimentos</p>
					<h3 className="h3 max-md:h5 text-p4">Palavras dos nossos parceiros:</h3>
				</div>

				<div
					className="testimonials_inner-after testimonials_inner-before 
                relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
					<div className="testimonials_group-after flex-50">
						{testimonials.slice(0, halfLength).map((testimonials) => (
							<TestimonialItem
								key={testimonials.id}
								item={testimonials}
								containerClassName="last:after:hidden last:after:max-md:block"
							/>
						))}
					</div>

					<div className="flex-50 ">
						{testimonials.slice(halfLength).map((testimonials) => (
							<TestimonialItem
								key={testimonials.id}
								item={testimonials}
								containerClassName="last:after:hidden after:rigth-auto after:left-0 after:max-md:-left-4 md:px-1"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
