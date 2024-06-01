import './Project.css';
import CostingFormImage from '../../assets/Images/CostingForm.png'

function Projects()
{
    return(
        <>
        <h1 className="my-3 text-center">My Projects</h1>
        <div className="container">
            <div className="row border border-2 border-dark border-start-0 border-end-0 py-2">
                <div className="col-md-6">
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/5ZpFUK07zaQ?si=9Auw7XMO_skCZ-17" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className="d-flex justify-content-center m-1">
                        <span className="badge bg-primary mx-1">PHP</span>
                        <span className="badge bg-primary mx-1">BOOTSTRAP</span>
                        <span className="badge bg-primary mx-1">JAVASCRIPT</span>
                        <span className="badge bg-primary mx-1">MYSQL</span>                    
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Login User Interface</h4>
                    <p className='lead'>A simple Login UI created with PHP and Bootstrap. Ajax calls the php script for checking if the username and password is correct from the MySql database. The values are then passed in the session variable which will expire if there is no activity in the browser depending on the set timer.</p>
                    <div>Source Code: <a href="https://github.com/ccfalcazar/PHP-Login">PHP Login</a></div>
                </div>
            </div>
            <div className="row border border-2 border-dark border-start-0 border-end-0 py-2">
                <div className="col-md-6">
                    <div className="ratio ratio-16x9">
                        <img className='img-fluid' src={CostingFormImage}></img>
                    </div>
                    <div className="d-flex justify-content-center m-1">
                        <span className="badge bg-primary mx-1">REACTJS</span>
                        <span className="badge bg-primary mx-1">BOOTSTRAP</span>
                        <span className="badge bg-primary mx-1">VITE - TYPESCRIPT</span>
                        <span className="badge bg-primary mx-1">FORMSPREE</span>                    
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Costing Form</h4>
                    <p className='lead'>A simple calculator to estimate the cost of a customized paperbag for a commercial printer. Created using vite-react deployed in github-pages. After experimenting with the cost, the formspree library will take the details and send it in the registered email address that can be checked by the company once the submit button is pressed.</p>
                    <div>Site: <a href="https://ccfalcazar.github.io/Paperbag-Quotation/">Paperbag Quotation</a></div>
                    <div className='mt-3'>Source Code: <a href="https://github.com/ccfalcazar/Paperbag-Quotation">Code</a></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;
