import axios from 'axios';

export const getEntries = async() => {
    const response = await  axios({
        method: 'GET',
        url: 'https://bender-blog.herokuapp.com/posts',
    });

    return response.data;
}