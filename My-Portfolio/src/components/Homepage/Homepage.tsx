import Introduction from '../Introduction/Introduction';
import './Homepage.css'

function Homepage()
{
    return (
            <div id="Homepage" className='p-0 m-0 vh-100 d-flex'>
                <div className='p-0 m-0 w-50 p-5 m-auto border border-5 border-success rounded-5'>
                    <div className='w-50 border-end border-5 border-success'>
                    <Introduction/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
    );
}

export default Homepage;