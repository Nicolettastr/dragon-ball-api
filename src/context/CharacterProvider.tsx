import { useEffect, useState } from "react";
import { getCharacterById, getCharacters } from "../api/DragonBallApi";
import { Character, INIT_CHARACTERS } from "../types/getCharactersTypes";
import { CharacterContext } from "./CharacterContext";

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [characters, setCharacters] = useState<Character[]>(INIT_CHARACTERS);
    const [id, setId] = useState<number | undefined>(undefined);
    const [character, setCharacter] = useState<Character>();
    const [favorites, setFavorites] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);

            try {
                const cacheData = localStorage.getItem("dragonBallCharacters");

                if (cacheData && cacheData.length > 0) {
                    const parsedData = JSON.parse(cacheData);
                    setCharacters(parsedData);
                    return;
                } else {
                    const data: Character[] = await getCharacters();
                    localStorage.setItem(
                        "dragonBallCharacters",
                        JSON.stringify(data)
                    );
                    setCharacters(data);
                }
            } catch (error) {
                throw new Error(`Error fetching characters: ${error}`);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchCharacters();
    }, []);

    useEffect(() => {
        const fetchCharacterSelected = async () => {
            setLoading(true);
            try {
                if (id) {
                    const data: Character = await getCharacterById(Number(id));
                    setCharacter(data);
                }
            } catch (error) {
                throw new Error(`Error fetching character: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacterSelected();
    }, [id]);

    const addFavorite = (newFavorite: Character) => {
        const favoritesCharacters = localStorage.getItem("favoritesCharacters");

        let updatedFavorites = favoritesCharacters
            ? JSON.parse(favoritesCharacters)
            : [];

        const isSelected = updatedFavorites.some(
            (favorite: Character) => favorite.id === newFavorite.id
        );

        if (isSelected) {
            updatedFavorites = updatedFavorites.filter(
                (favorite: Character) => favorite.id !== newFavorite.id
            );
        } else {
            updatedFavorites.push(newFavorite);
        }

        setFavorites(updatedFavorites);

        localStorage.setItem(
            "favoritesCharacters",
            JSON.stringify(updatedFavorites)
        );
    };

    const removeFavorite = (deleteCharacter: Character) => {
        if (deleteCharacter) {
            const newFavorites = favorites.filter(
                (favorite) => favorite.id !== deleteCharacter.id
            );

            setFavorites(newFavorites);
            localStorage.setItem(
                "favoritesCharacters",
                JSON.stringify(newFavorites)
            );
        }
    };

    const selectCharacter = (characterId: number) => {
        if (!characterId) {
            return;
        }
        setId(characterId);
    };

    const handleFavorite = (
        event: React.MouseEvent,
        character?: Character,
        isFavorite?: boolean
    ) => {
        event.stopPropagation();

        if (!character) {
            return;
        }

        if (isFavorite) {
            return removeFavorite(character);
        } else {
            return addFavorite(character);
        }
    };

    return (
        <CharacterContext.Provider
            value={{
                characters,
                character,
                selectCharacter,
                id,
                favorites,
                addFavorite,
                removeFavorite,
                loading,
                handleFavorite,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
