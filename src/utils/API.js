import CONSTANTS from './CONSTANTS';

class APIWrapper {
	constructor() {
		this.url = CONSTANTS.API_URL;
		// TODO: Add caching here
	}

	/**
  	* Send a GET request
  	* @param {string} endpoint endpoint the user is trying to access
  	* @returns {Promise<Object>} Object of data
  */
	async get(endpoint) {
		return this._sendRequest(endpoint, 'GET');
	}

	// Fetch method, use get method in the future to get from backend
	fetchData() {
		console.log('Test');
	}

	/**
  	* Send a POST request
  	* @param {string} endpoint endpoint the user is trying to access
    * @param {object} data Data to be added
  	* @returns {Promise<Object>} Object of data
  */
	async post(endpoint, data) {
		return this._sendRequest(endpoint, 'POST', data);
	}

	/**
  	* Send a PUT request
  	* @param {string} endpoint endpoint the user is trying to access
  	* @returns {Promise<Object>} Object of data
  */
	async put(endpoint) {
		return this._sendRequest(endpoint, 'PUT');
	}

	/**
  	* Send a DELETE request
  	* @param {string} endpoint endpoint the user is trying to access
  	* @returns {Promise<Object>} Object of deleted data
  */
	async delete(endpoint) {
		return this._sendRequest(endpoint, 'DELETE');
	}

	/**
  	* Send a get request
  	* @param {string} endpoint endpoint the user is trying to access
  	* @returns Object of data
  */
	async _sendRequest(endpoint, method = 'GET', data = {}) {
		let obj = { method };
		if (method != 'GET') {
			obj = {
				...obj,
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(data),
			};
		}

		try {
			const response = await fetch(`${this.url}${endpoint}`, obj);
			const d = await response.json();
			return d;
		} catch (err) {
			return { error: err.message };
		}
	}
}

export default APIWrapper;
