import '../AboutMe/AboutMe.css';

function AboutMe()
{

    function Star(rating: number)
    {
        if(rating == 1)
            return <span className="text-warning bi bi-star-fill mx-1" />
        else
        return  (<span className="text-warning bi bi-star-fill mx-1">{Star(rating-1)}</span>);
    }

    function SkillList(Skill:string, rating: number)
    {
        return(
        <li className='list-group-item'>
        <div className='row m-0 p-0'>
            <div className='col p-0 m-0'>{Skill}</div>
            <div className='col m-0 p-0'>
                {Star(rating)}
            </div>
        </div>
        </li>
        )
    }

    return (
    <>
        <div className='m-auto'>
            <div className='row'>
                <div className='p-3 col-md-6'>
                    <h2 className='header text-primary'>Programming Language</h2>
                    <ul className='list-group'>
                    {SkillList("C++", 5)}
                    {SkillList("C#", 5)}
                    {SkillList("Visual Basic", 3)}
                    {SkillList("VBA", 3)}
                    {SkillList("Java", 2)}
                    </ul>
                </div>
                <div className='p-3 col-md-6'>
                    <h2 className='header text-primary'>Web Development</h2>
                    <ul className='list-group'>
                        {SkillList("HTML and CSS", 5)}
                        {SkillList("Bootstrap", 5)}
                        {SkillList("Javascript", 5)}
                        {SkillList("PHP", 4)}
                        {SkillList("ReactJS", 4)}
                        {SkillList("Asp.Net", 3)}
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}

export default AboutMe;