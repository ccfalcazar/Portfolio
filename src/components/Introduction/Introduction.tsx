import './Introduction.css';
import {useNavigate} from 'react-router-dom';

function Introduction()
{
    let navigate = useNavigate();


    return (
        <>
        <div className='m-auto w-50'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1 id="name"className="fw-bold display-2 lead text-dark">Christian Alcazar</h1>
                    <h2 id="position" className="text-primary display-6 fst-italic fw-bold">Web and Application Developer</h2> 
                    <h4 id="sub-intro" className="text-justify text-black font-monospace text-black-50">experienced in both manual and automated testing.</h4>
                </div>
                <div className='mt-3'>
                    <span className='btn btn-primary rounded'>About</span>
                </div>
             </div>
        </div>
        </>
    );
}

export default Introduction;