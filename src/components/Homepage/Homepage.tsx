import AboutMe from '../AboutMe/AboutMe';
import Introduction from '../Introduction/Introduction';
import './Homepage.css'

function Homepage()
{
    return (
            <div id="Homepage" className='p-0 m-0'>
                <section id='Introduction'>
                        <Introduction/>
                </section>
                <section id="AboutMe">
                    <div className='m-auto'>
                        <AboutMe/>
                    </div>
                </section>
            </div>
    );
}

export default Homepage;