import { useNavigate } from "react-router-dom";
import "../App.css";
import { useCharacterContext } from "../context/useCharacterContext";
import Loader from "./Loader";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const CharacterById = () => {
    const navigate = useNavigate();
    const { character, loading, favorites, handleFavorite } =
        useCharacterContext();

    const fields = [
        { label: "Race", value: character?.race },
        { label: "Ki", value: character?.ki },
        { label: "Gender", value: character?.gender },
        { label: "Origin Planet", value: character?.originPlanet?.name },
        { label: "Transformations", value: character?.transformations?.length },
        { label: "Max Ki", value: character?.maxKi },
    ];

    const handleDescriptionFormat = (description: string | undefined) => {
        if (!description) {
            return;
        }

        const selectSecondPeriod = description.split(".");

        if (selectSecondPeriod.length > 1) {
            return selectSecondPeriod.slice(0, 1).join(".") + ".";
        }

        return description;
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (loading) {
        return <Loader />;
    }

    const isFavorite = favorites.some((exists) => exists.id === character?.id);

    console.log("fav", favorites);

    return (
        <section className='character_id_wrapper'>
            <div className='section_opacity'>
                <div className='character_info_section'>
                    <div className='info'>
                        <h3>
                            {character?.name}
                            <span
                                onClick={(event) =>
                                    handleFavorite(event, character, isFavorite)
                                }
                                className={`favorite_icon ${
                                    isFavorite ? "isFavorite" : ""
                                }`}
                            >
                                <FaHeart className='character_id_favorite' />
                            </span>
                        </h3>
                        <p>{handleDescriptionFormat(character?.description)}</p>
                        <div className='character_data'>
                            {fields.map((field, index) => (
                                <div key={index} className='inputs'>
                                    <label>{field.label}</label>
                                    <input
                                        className='data_input'
                                        type='text'
                                        value={field.value}
                                        readOnly
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='image_section'>
                    <figure className='character_img'>
                        <img src={character?.image} alt={character?.name} />
                    </figure>
                </div>
            </div>
            <button onClick={handleBack}>
                <IoMdArrowRoundBack className='button_icon' />
            </button>
        </section>
    );
};

export default CharacterById;
