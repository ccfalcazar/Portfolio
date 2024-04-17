import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

function Homepage()
{
    return (
        <div id="Homepage" className="vh-100">  
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className='row p-0 m-0'>
                    <div className='col-md-6 p-0 m-0'>
                    <LeftPanel/>
                    </div>
                    <div className='col-md-6 p-0 m-0'>
                    <RightPanel/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;