import { FaHeart } from "react-icons/fa";
import { Character } from "../types/getCharactersTypes";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useCharacterContext } from "../context/useCharacterContext";
import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const CharactersList = () => {
    const navigate = useNavigate();
    const { characters, loading, selectCharacter, favorites, handleFavorite } =
        useCharacterContext();
    const [search, setSearch] = useState<string>("");
    const [filteredCharacters, setFilteredCharacters] =
        useState<Character[]>(characters);

    useEffect(() => {
        if (characters.length > 0) {
            setFilteredCharacters(characters);
        }
    }, [characters, characters.length]);

    const showCharacter = (character: Character) => {
        selectCharacter(character.id);
        navigate(`/character/${character.id}`);
    };

    const handleSearch = (searchCharacter: string) => {
        setSearch(searchCharacter);
        const filtered = characters.filter((item) =>
            item.name.toLowerCase().includes(searchCharacter.toLowerCase())
        );

        setFilteredCharacters(filtered);
    };

    const card = filteredCharacters?.map((item) => {
        const isFavorite = favorites.some(
            (character) => character.id === item.id
        );
        const character = item;
        return (
            <section
                key={character.id}
                onClick={() => showCharacter(character)}
                className='card'
            >
                <div className='card_body'>
                    <span
                        onClick={(event) =>
                            handleFavorite(event, character, isFavorite)
                        }
                        className={`favorite_icon ${
                            isFavorite ? "isFavorite" : ""
                        }`}
                    >
                        <FaHeart />
                    </span>
                    <figure className='card_img'>
                        <div className='card_opacity'>
                            <img src={character.image} alt={character.name} />
                        </div>
                    </figure>
                    <h3 className='card_title'>{character.name}</h3>
                </div>
                <div className='card_footer'>
                    <div>
                        <span>Gender</span>
                        <span>{character.gender}</span>
                    </div>
                    <div>
                        <span>Ki</span>
                        <span>{character.ki}</span>
                    </div>
                    <div>
                        <span>Race</span>
                        <span>{character.race}</span>
                    </div>
                </div>
            </section>
        );
    });

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <section className='search_bar'>
                <input
                    type='text'
                    value={search}
                    onChange={(event) => handleSearch(event.target.value)}
                />
                <span>
                    <MdOutlineCancel />
                </span>
            </section>
            <section className='Characters_list'>{card}</section>
        </>
    );
};

export default CharactersList;
