import './Introduction.css';

function Introduction()
{
    function handlesClick(SectionId : string)
    {
        const AboutSection = document.getElementById(SectionId);
        AboutSection?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
        <div className='m-auto w-75'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1 id="name"className="fw-bold display-1 text-dark">Christian Alcazar</h1>
                    <h3 id="position" className="text-primary fw-bold">WEB AND APPLICATION DEVELOPER</h3> 
                    <h3 id="sub-intro" className="text-justify text-black font-monospace fst-italic text-black-50">experienced in both manual and automated testing.</h3>
                </div>
                <div className='mt-3 m-0'>
                        <span className='btn btn-outline-primary rounded me-1' onClick={()=>handlesClick('AboutMe')}>About</span>
                        <span className='btn btn-outline-primary rounded mx-1'>Experiences</span>
                        <span className='btn btn-outline-primary rounded mx-1'>Projects</span>
                </div>
             </div>
        </div>
        </>
    );
}

export default Introduction;