import AboutMe from '../AboutMe/AboutMe';
import Introduction from '../Introduction/Introduction';
import './Homepage.css'

function Homepage()
{
    return (
            <div id="Homepage" className='p-0 m-0'>
                <div id='FixedSide' className='d-none d-lg-block m-auto'>
                    <Introduction/>
                </div>
                <div className='row'>
                    <div className='col-md-6 pt-5 px-4 ms-lg-auto me-3'>
                        <AboutMe/>
                    </div>
                </div>
            </div>
    );
}

export default Homepage;