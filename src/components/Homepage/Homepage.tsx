import Introduction from '../Introduction/Introduction';
import './Homepage.css'

function Homepage()
{
    return (
            <div id="Homepage" className='p-0 m-0 vh-100 d-flex'>
                <div className='p-0 m-0 w-75 m-auto border border-5 border-white rounded-5 shadow'>
                    <div className='p-5'>
                    <Introduction/>
                    </div>

                </div>
            </div>
    );
}

export default Homepage;