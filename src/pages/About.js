import avatar from "../assets/avatar.jpg"

const About = () => {
    return (
        <div className="post about">
            <figure>
                <img src={avatar} alt="CrisHood"/>
            </figure>
            <h1>CrisHood</h1>
            <h2>Status: Alive</h2>
            <p>Specie: Human</p>
            <p>Location: Sabaneta, Antioquia</p>
            <p>Description: I'm a magician. I write code and music.</p>
            <h4> 3 things I learnt at Make It Real: </h4>
            <ul>
                <li>Redux.</li>
                <li>Hooks.</li>
                <li>Just jump, you will learn how to swim in the water.</li>
            </ul>
            <p>sir@crishood.com</p>
            <a href="https://github.com/crishood">https://github.com/crishood</a>
        </div>
    );
}

export default About;