import React from 'react';
import '../page.css';
// import { BiDownArrow } from 'react-icons/fa';
import arrow from '../../assets/bg-arrow-down@2x.png'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh] bg-img  flex justify-center items-center relative text-center">
                <div className="hero-content text-center text-neutral-content z-10 text-white">
                    <div className="max-w-[599px] m-auto z-10 text-white">
                        <div className='mb-5 '>
                            <span className="mb-5 text-5xl font-bold">For Everyone</span>{'  '}
                            <span className='text-5xl font-bold'>
                                <Typewriter
                                    words={['Hotel', 'And', 'Resort']}
                                    loop={1000}
                                    cursor
                                    cursorStyle='✔'
                                    typeSpeed={90}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                        <p>Experience nature in its purest form, while enjoying attention to detail, indulgent pampering and exceptional cuisine.</p>
                        <button className="px-8 mt-9 py-3 font-semibold rounded bg-violet-900 text-white">Book Now</button>
                        <img id='arrow-down' className='' src={arrow} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;