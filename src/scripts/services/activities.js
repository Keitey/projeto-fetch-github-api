import { baseURL, userActivity } from '../variables.js';

async function getActivities(userName) {
    const response = await fetch(`${baseURL}/${userName}/events?per_page=${userActivity}`)
    return await response.json()
};

export { getActivities };


