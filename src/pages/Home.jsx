import React from 'react';
import Fullpage from '@fullpage/react-fullpage';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';
import Slide1 from '../components/Slide1';
import Slide4 from '../components/Slide4';

const Home = () => {
    return (
        <Fullpage
            scrollingSpeed={1000}
            navigation
            fitToSection={true}
            scrollOverflow={true}
            autoScrolling={true}
            render={({ state, fullpageApi }) => {
                return (
                    <div>
                        <div className="section" style={{ backgroundColor: '#0d1117', color: 'white' }}>
                            <Slide1 />
                        </div>
                        <div className="section" style={{ backgroundColor: '#1f2937', color: 'white' }}>
                            <Slide2 />
                        </div>
                        <div className="section" style={{ backgroundColor: '#111827', color: 'white' }}>
                            <Slide3 />
                        </div>
                        <div className="section" style={{ backgroundColor: '#111827', color: 'white' }}>
                            <Slide4 />
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default Home;
