/* eslint-disable react/prop-types */
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

function App() {
	const carouselRef = useRef(null);
	const { scrollX } = useScroll({
		container: carouselRef,
	});

	const [showButtonLeft, setShowButtonLeft] = useState(false);
	const [showButtonRight, setShowButtonRight] = useState(true);

	const blockWidth = 0.3 * document.documentElement.clientWidth;

	useMotionValueEvent(scrollX, 'change', (latest) => {
		setShowButtonRight(
			latest <=
				carouselRef.current.scrollWidth -
					1.1 * document.documentElement.clientWidth
		);
		setShowButtonLeft(latest >= blockWidth / 4);
	});

	function handleClick(clickVal) {
		if (clickVal === 'l') {
			carouselRef.current.scrollLeft -= blockWidth;
		} else {
			carouselRef.current.scrollLeft += blockWidth;
		}
	}

	function Block({ color }) {
		if (color) {
			return (
				<div className="bg-red-500 transform transition duration-500 hover:scale-[1.025] h-[85%] min-w-[30vw] ml-10 rounded-lg snap-center inline-block"></div>
			);
		} else {
			return (
				<div className="bg-neutral-300 transform transition duration-500 hover:scale-[1.025] h-[85%] min-w-[30vw] ml-10 rounded-lg snap-center inline-block"></div>
			);
		}
	}

	return (
		<>
			<div
				id="carouselDiv"
				className="my-5 px-48 flex h-[95vh] items-center scroll-smooth scroll-px-96 snap-x snap-mandatory overflow-x-scroll scrollbar-hide group"
				ref={carouselRef}
			>
				{showButtonLeft && (
					<button
						onClick={() => handleClick('l')}
						className="group-hover:visible group-hover:scale-150 transform transition duration-500 sticky left-10 text-5xl z-10 m-0 p-0 text-neutral-500 invisible"
					>
						<FaCircleChevronLeft />
					</button>
				)}
				<Block color="red" />
				<Block />
				<Block color="red" />
				<Block />
				<Block color="red" />
				<Block />
				<Block color="red" />
				<Block />
				<Block color="red" />
				<Block />
				<Block color="red" />
				{showButtonRight && (
					<button
						onClick={() => handleClick('r')}
						className="group-hover:visible group-hover:scale-150 transform transition duration-500 sticky right-10 text-5xl z-10 m-0 p-0 text-neutral-500 invisible"
					>
						<FaCircleChevronRight />
					</button>
				)}
			</div>
			<div className="sticky top-0 pt-10 w-full bg-green-500 min-h-[500vh]">
				<div className="sticky top-20 rounded-3xl bg-white w-[90%] h-[100vh] mx-auto"></div>
				<div className="sticky top-20 rounded-3xl bg-neutral-800 w-[90%] h-[100vh] mx-auto"></div>
				<div className="sticky top-20 rounded-3xl bg-blue-500 w-[90%] h-[100vh] mx-auto"></div>
				<div className="sticky top-0 w-full rounded-t-3xl bg-neutral-900 h-[100vh]"></div>
			</div>
			<div className="sticky top-0 w-full bg-neutral-200 h-[100vh]"></div>
		</>
	);
}

export default App;
