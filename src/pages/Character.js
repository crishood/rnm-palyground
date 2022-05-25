import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {  Link } from "react-router-dom";

const Character = () => {
    const { id } = useParams();
    const character = useSelector((state) => state.postsReducer.posts[id-1]);
    return (
        <div className="post character">
            <figure>
                <img src={character.image}/>
            </figure>
            <h1>{character.name}</h1>
            <h2>Status: {character.status}</h2>
            <p>Specie: {character.species}</p>
            <p>Location: {character.location.name}</p>
            <Link to={'/'}>Go back</Link>
        </div>
    );
}

export default Character;