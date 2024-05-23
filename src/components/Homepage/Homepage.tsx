import AboutMe from '../AboutMe/AboutMe';
import Introduction from '../Introduction/Introduction';
import './Homepage.css'

function Homepage()
{
    return (
            <div id="Homepage" className='p-0 m-0'>
                <div className='row vh-100 p-4'>
                    <div className='col-md-6 align-self-center mx-auto my-auto'>
                        <Introduction/>
                    </div>
                </div>
            </div>
    );
}

export default Homepage;