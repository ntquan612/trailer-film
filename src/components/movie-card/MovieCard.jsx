import React from 'react';

import { Link } from 'react-router-dom';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import Button from '../button/Button';
import './movie-card.scss';



function MovieCard(props) {
    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className='movie-card' style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className='fas fa-play'></i>
                </Button>
            </div>
            <h3 className='movie_card_title' title={item.title || item.name}>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;