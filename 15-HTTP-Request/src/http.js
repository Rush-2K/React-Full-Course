export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();
    
    if(!response.ok){
        throw new Error('Failed to fetch places');
    } //200, 300 success, 400, 500 error

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places: places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();

    if(!response.ok) {
        throw new Error('Failed to update user data')

        return resData.message;
    }
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();
    

    if(!response.ok){
        throw new Error('Failed to fetch user places');
    } //200, 300 success, 400, 500 error

    // console.log(resData)
    return resData.places;
}