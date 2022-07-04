export interface Pet {
    name: string,
    age: number
}

export interface Passenger {
    id: number,
    name: string,
    checkedIn: boolean,
    checkInDate: number | null,
    pets: Pet[] | null
}