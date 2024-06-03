
function Contact()
{
    return (
    <div className="d-flex vh-100">
        <div className="card m-auto shadow">
            <div className="card-title text-center text-white bg-primary rounded">
                <h4 className="p-3 display-6">Contact Me</h4>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush fs-4">
                    <li className="list-group-item text-primary"><i className="bi bi-envelope-at-fill"></i> ccfalcazar@gmail.com</li>
                    <li className="list-group-item text-primary"><i className="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/christian-carlo-alcazar-3606741b8/">Profile</a></li>
                    <li className="list-group-item text-primary"><i className="bi bi-facebook"></i> <a href="https://www.facebook.com/agate014">Profile</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Contact;