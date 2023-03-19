import { Data, ResponseStatusError } from '../models/common';
import '../styles/error.css'


const baseJSONRequest = async <T>(url: string): Promise<T> => {
	const response = await fetch(url);
	if (!response.ok) {
		const err = new Error("Response is not 2XX") as ResponseStatusError;
		err.status = response.status;
		throw err;
	}
	const jsonData = await response.json();
	return jsonData;
}

const getShipsList = (): Promise<Data> => {
	return baseJSONRequest(`https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/`);
}

export { getShipsList }