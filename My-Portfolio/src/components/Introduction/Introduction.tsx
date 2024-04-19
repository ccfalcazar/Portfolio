import './Introduction.css';

function Introduction()
{
    return (
        <>
        <p id="intro" className="text-justify text-dark">Hi! I'm</p>
        <p id="name"className="display-1 fw-bold">Christian Alcazar</p>
        <p id="position" className="text-primary fst-italic fw-bold display-5">Web and Application Developer</p> 
        <p id="sub-intro" className="display-6 text-justify text-black-50">experienced in both manual and automated testing.</p>
        </>
    );
}

export default Introduction;