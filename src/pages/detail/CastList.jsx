import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from "swiper";



function CastList(props) {

    const { category } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 30));
        }
        getCredits();
    }, [category, props.id]);

    return (
        <div className='casts'>
            <Swiper
                slidesPerView={5.5}
                spaceBetween={10}
                breakpoints={{
                    300: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5.5,
                        spaceBetween: 20,
                    },
                }}
            >
                <div className="casts__item">
                    {
                        casts.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className="casts__item__img"
                                    style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}>
                                </div>
                                <p className='casts__item__name'>{item.name}</p>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </div >
    );
}

export default CastList;