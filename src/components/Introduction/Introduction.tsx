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
        <div className='m-md-auto mx-auto w-75'>
            <div className='p-0 m-0'>
                <h1 id="name"className="fw-bold display-1 text-dark">Christian Alcazar</h1>
                <h3 id="position" className="text-primary fw-bold">WEB AND APPLICATION DEVELOPER</h3> 
                <p id="sub-intro" className="fs-6 text-justify text-black font-monospace fst-italic text-black-50">
                    A versatile Computer Engineer with knowledge in 
                    <a className='link-dark link-opacity-75 link-underline link-underline-opacity-0' href='https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/sockets/sockets-overview'> Socket Programming</a>,
                    <a className='link-dark link-opacity-75 link-underline link-underline-opacity-0' href='https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/'> Asynchronous Programming</a> and 
                    <a className='link-dark link-opacity-75 link-underline link-underline-opacity-0' href='https://learn.microsoft.com/en-us/dotnet/api/system.io.ports.serialport?view=net-8.0'> Microcontroller Interfacing</a>.
                    Adding what I've learned as an <span className="fs-6 text-dark">Associate Quality Assurance Engineer</span>, I can create a more modular, flexible, sustainable and maintainable programs for fast and easy testing.
                </p>
            </div>
            <div id='techstack' className='text-primary fs-1'>
                <i className="devicon-cplusplus-plain"></i>
                <i className="devicon-csharp-plain"></i>
                <i className="devicon-dot-net-plain-wordmark"></i>           
                <i className="devicon-html5-plain-wordmark colored"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-jquery-plain-wordmark"></i>
                <i className="devicon-php-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-mysql-plain-wordmark colored"></i>
            </div>
            <div id='shortcut' className='mt-3 m-0'>
                <span className='btn btn-sm btn-outline-primary rounded me-1' onClick={()=>handlesClick('MyProject')}>My Projects</span>
            </div>
        </div>
        </>
    );
}

export default Introduction;