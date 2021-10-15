
// Tools
import { API_URL } from '../../../../init';

// Types
import { User } from '../../types';

type IPostUser = (username: string) => () => Promise<User>

export const createUser: IPostUser = (username) => async () => {
    const response = await fetch(`${API_URL}/users/register`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });

    if (response.status !== 201) {
        throw new Error('Post User failed');
    }

    return response.json();
};