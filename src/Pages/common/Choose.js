import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/full02-lowres.jpg'
import img2 from '../../assets/full06-lowres.jpg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const Choose = () => {
    
    return (
        <div className='mt-16 mb-12'>
            {
                // user && user.emailVerified ? (
                    <div className="max-w-screen-xl p-5 mx-auto text-gray-100">
                        <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
                        <p className='max-w-3xl m-auto text-center mb-24'>An online gallery is a simple concept. It's a website where you can upload your digital photos to be stored, organized, and shared with others. Most people do not go through the trouble and expense of buying and building their own website. Most people find an image host and build their gallery on that platform</p>
                        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 sm:grid-cols-2'>
                            <Link to='/roomDetails'>
                            <div className="" style={{backgroundImage: 'url(../../../../assets/full02-lowres.jpg)'}}>
                                <div className="img-scale relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500">
                                    <img className='h-[383px]' src={img1} alt="" />
                                    <div className="img- absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                        <Link rel="noopener noreferrer" href="#" className="px-3 text-2xl py-2 font-semibold tracking-wider uppercase text-gray-100 bgundefined">Single Romm</Link>
                                        <div className="flex flex-col justify-start text-center text-gray-100">
                                            <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                            <span className="leading-none uppercase">Aug</span>
                                        </div>
                                    </div>
        
                                </div>
        
                            </div>
                            </Link>
                            <Link to='/roomDetails'>
                            <div className="" style={{backgroundImage: 'url(../../../../assets/full02-lowres.jpg)'}}>
                                <div className="img-scale relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500">
                                    <img className='h-[383px]' src={img2} alt="" />
                                    <div className="img- absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                        <Link rel="noopener noreferrer" href="#" className="px-3 text-2xl py-2 font-semibold tracking-wider uppercase text-gray-100 bgundefined">Single Romm</Link>
                                        <div className="flex flex-col justify-start text-center text-gray-100">
                                            <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                            <span className="leading-none uppercase">Aug</span>
                                        </div>
                                    </div>
        
                                </div>
        
                            </div>
                            </Link>
                        </div>
                    </div>
                // )
                // :
                // <></>
            }
        </div>
    );
};

export default Choose;