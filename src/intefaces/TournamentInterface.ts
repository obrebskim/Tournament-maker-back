
export interface TournamentInterface {
    id: string,
    name: string,
    city: string,
    address: string,
    date: Date,
    time: string,
    price: number,
    pool: number,
    description: string,
    image: string,
    url: string,
    type: number;
    website: string;
}

export interface ResponseCreateTournament {
    isSuccess: boolean;
    id?: string;
}

export interface TournamentTumbnailInterface {
    id: string,
    image: string | null,
    name: string,
    city: string,
    pool: number,
    currency_code: string,
    description: string,
    date: Date,
    time: string,
    price: number,
}