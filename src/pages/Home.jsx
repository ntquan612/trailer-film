import React from 'react';
import { Link } from 'react-router-dom';

import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import { OutlineButton } from '../components/button/Button';
import { category, movieType, tvType } from '../api/tmdbApi';

function Home() {
    return (
        <>
            <HeroSlide />
            <div className="container">

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Thịnh Hành</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>Xem thêm</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Phim Được Yêu Thích Nhất</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>Xem thêm</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>TV Thịnh Hành</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>Xem thêm</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={tvType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>TV Được Xếp Hạng Cao Nhất</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>Xem thêm</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={tvType.top_rated} />
                </div>

            </div>
        </>
    );
}

export default Home;    