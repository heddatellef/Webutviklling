import { ICountry } from '../Redux/types/countries';
import { useSelector } from 'react-redux';

export const LikeButton = () => {
    const likes = useSelector<ICountry, ICountry["Likes"]>((state) => state.Likes);
    const id = useSelector<ICountry, ICountry["_id"]>((state) => state._id);

    function addLikes() {
        return fetch('http://http://localhost:8001/' + id, {
            method: 'PUT',
            body: JSON.stringify(likes+1),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
};