export const listBreweries = async () => {
    const res = await fetch('https://api.openbrewerydb.org/v1/breweries');
    const response = await res.json();
    return response
}

export const breweries = async (id: string) => {
    const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
    const response = await res.json();
    return response
}