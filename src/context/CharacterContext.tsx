import { createContext } from "react";
import { Character } from "../types/getCharactersTypes";

interface CharacterContextProps {
    characters: Character[];
    favorites: Character[];
    id?: number;
    addFavorite: (character: Character) => void;
    removeFavorite: (character: Character) => void;
    selectCharacter: (characterId: number) => void;
    loading: boolean;
    character: Character | undefined;
    handleFavorite: (
        event: React.MouseEvent,
        character?: Character,
        isFavorite?: boolean
    ) => void;
}

export const CharacterContext = createContext<
    CharacterContextProps | undefined
>(undefined);
