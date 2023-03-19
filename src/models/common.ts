import { Ship } from "./ship";

type Nullable<T> = T | null;
type ResponseStatusError = Error & {status: number};
type Data = {
    status: string;
    data: Ships;
}

type Ships = {
    [name: string]: Ship
}

export type { Nullable, ResponseStatusError, Data };
