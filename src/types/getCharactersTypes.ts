export interface Character {
    id: number;
    name: string;
    race: string;
    ki: string;
    maxKi: string;
    gender: string;
    description: string;
    affiliation: string;
    image: string;
    originPlanet?: originPlanet;
    transformations?: transformations[];
}

export interface Meta {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export interface Links {
    first: string;
    last: string;
    next: string;
    previous: string;
}

export interface DragonBallCharactersType {
    items: Character[];
    meta: Meta;
    links: Links;
}

export interface originPlanet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: Date | null;
}

export interface transformations {
    deletedAt: Date | null;
    id: number;
    image: string;
    name: string;
    ki: string;
}

export const INIT_CHARACTERS: Character[] = [];
