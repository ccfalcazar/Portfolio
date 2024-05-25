import './Introduction.css';

function Introduction()
{
    return (
        <>
        <div className='m-auto w-75'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1 id="name"className="fw-bold display-1 text-dark">Christian Alcazar</h1>
                    <h3 id="position" className="text-primary fw-bold">WEB AND APPLICATION DEVELOPER</h3> 
                    <h3 id="sub-intro" className="text-justify text-black font-monospace fst-italic text-black-50">experienced in both manual and automated testing.</h3>
                </div>
                <div className='mt-3'>
                        <a href='#AboutMe' className='mx-1'><button className='btn btn-outline-primary rounded'>About</button></a>
                        <a href='#AboutMe' className='mx-1'><button className='btn btn-outline-primary rounded'>Experiences</button></a>
                        <a href='#AboutMe' className='mx-1'><button className='btn btn-outline-primary rounded'>Projects</button></a>
                </div>
             </div>
        </div>
        </>
    );
}

export default Introduction;