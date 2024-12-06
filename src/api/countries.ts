import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

export async function getCountries() {
    return await axios.get(`${API_URL}/all`);
}

export async function getCountryByName(inputName: string) {
    return await axios.get(`${API_URL}/name/${inputName}`);
}

export async function getCountriesByRegion(selectedRegion: string) {
    return await axios.get(`${API_URL}/region/${selectedRegion}`)
}