import Introduction from '../Introduction/Introduction';
import './Homepage.css'

function Homepage()
{
    return (
            <div id="Homepage" className='p-0 m-0 vh-100 d-flex'>
                <div className='d-none d-md-block p-0 m-0 w-50 m-auto border border-5 border-white rounded-5 shadow'>
                    <div className='w-50 p-5 mt-3 mb-3 border-end border-3 border-white'>
                    <Introduction/>
                    </div>
                    <div className='w-50'>
                        
                    </div>
                </div>
            </div>
    );
}

export default Homepage;