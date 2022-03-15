import React,{ useState} from 'react';
import heroimg1 from "../images/home/img1.jpg"
import heroimg2 from "../images/home/img2.jpg"
import heroimg3 from "../images/home/img3.jpg"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const CarouselData = 
  [{id: "1",
    img : heroimg1, },

    {
      id:"2",
      img: heroimg2,

    },
    {
      id:"3",
img: heroimg3,

    },
  ];


const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = CarouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setTimeout(CarouselData, 2000)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(CarouselData) || CarouselData.length <= 0) {
    setTimeout(CarouselData, 2000)
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.img} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};
// let count=0;
// let slideInterval;

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideRef = useRef();

//    const removeAnimation = () => {
//     slideRef.current.classList.remove("fade-anim");
//   };

//   useEffect(() => {
//     slideRef.current.addEventListener("animationend", removeAnimation);
//     slideRef.current.addEventListener("mouseenter", pauseSlider);
//     slideRef.current.addEventListener("mouseleave", startSlider);

//     startSlider();
//     return () => {
//       pauseSlider();
//     };
//     // eslint-disable-next-line
//   }, []);

//   const startSlider = () => {
//     slideInterval = setInterval(() => {
//       handleOnNextClick();
//     }, 3000);
//   };

//   const pauseSlider = () => {
//     clearInterval(slideInterval);
//   };

//   const handleOnPrevClick = () =>{
  
//   const productLength = CarouselData.length;

//   count = (currentIndex + productLength -1) % productLength;

// setCurrentIndex(count);
// slideRef.current.classList.add("fade-anim")
// }
// const handleOnNextClick = () =>{


//   count = (count+1) % CarouselData.length;
 
//   setCurrentIndex(count);
// }
//   return <div>
//     <div ref={slideRef} className="mb-10 w-screen bg-cover ">

//   <img src={CarouselData[currentIndex]} alt="image Slider" className='h-72 bg-cover mx-auto w-screen lg:w-9/12' /> 
// {/* {CarouselData.map((photo,key) =>(
//   <img src={photo[currentIndex]} key={key} alt="image-slider" className="w-full h-80"/>
// ))}  */}

// <div className="ml-2 mr-4 -translate-y-40 flex justify-between items-center">
//   <button className="bg-black text-white p-1 rounded-full bg-opactity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnPrevClick}>
//     <h6>P</h6>


//   </button>
//     <button className="bg-black  text-white p-1 rounded-full bg-opactity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnNextClick}>
//     <h6>N</h6>
//   </button>
//   </div>


// </div>

  

//   </div>;
  
// };



export default Carousel;
