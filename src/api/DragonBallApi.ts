const BASE_URL = "https://dragonball-api.com/api";

export const getCharacters = async () => {
    const response = await fetch(`${BASE_URL}/characters`);
    const characters = await response.json();
    if (!response.ok) {
        throw new Error("Error fetching Dragon Ball characters");
    }
    return characters.items;
};

export const getCharacterById = async (id: number) => {
    const response = await fetch(`${BASE_URL}/characters/${id}`);
    const characters = await response.json();
    if (!response.ok) {
        throw new Error("Error fetching Dragon Ball characters");
    }
    return characters;
};
