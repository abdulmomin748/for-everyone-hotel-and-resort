import React from 'react';
import Banner from './common/Banner';
import Choose from './common/Choose';
import CustomarReview from './common/CustomarReview';
import Gallary from './common/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />  
            <Gallary />
            <Choose />
            <CustomarReview />
        </div>
    );
};

export default Home;