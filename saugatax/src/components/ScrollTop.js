import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';


const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <span className='mt-5 animate-bounce w-10 h-10 bg-indigo-500 p-1 inline-block rounded-full cursor-pointer mb-12 '>
	
	<FaArrowCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	
    </span>
);
}

export default ScrollButton;
