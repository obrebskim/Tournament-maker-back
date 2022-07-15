export class CreateTurnamentDto {
    id: string;
    name: string;
    city: string;
    address: string;
    date: Date;
    time: string;
    price: number;
    pool: number;
    description: string | null;
    image: string | null;
    url: string | null;
    currency: string;
    country: string;
    owner: string;
    type: number;
    website: string;
}