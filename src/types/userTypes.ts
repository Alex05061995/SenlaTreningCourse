interface GEO {
  lat?: string;
  lng?: string;
}

interface Address {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: GEO; 
}

interface Company {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}