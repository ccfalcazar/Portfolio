import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Project';
import './Homepage.css'

function Homepage()
{
    return (
            <div id="Homepage" className='p-0 m-0'>
                <section id='Introduction'>
                        <Introduction/>
                </section>
                <section id="MyProject">
                        <Projects/>
                </section>
            </div>
    );
}

export default Homepage;