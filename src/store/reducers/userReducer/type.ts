interface Geo  {
    lat?: string | number;
    lng?: string | number;
}

interface Address {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string | number;
    geo?:  Geo
}

interface Company {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}

export interface User{
    id: number;
    name: string;
    username: string;
    email?: string;
    address?: Address;
    geo?: Geo;
    company?: Company;
    phone?: string;
    website?: string;
}

export interface Users {
    users?: User[];
    error?: string;
    isLoading?: boolean;
}