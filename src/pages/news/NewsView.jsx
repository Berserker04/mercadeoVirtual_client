import React from 'react'
import moment from "moment";
import { URL_API } from '../../api';
import "./styles/news.scss";

const NewsView = ({ news }) => (
    <section className="news-container scrollBar">
        <article className="news-news">
            <div className="news-news-header">
                <h2>Noticias</h2>
            </div>
            <div className="news-news-content">
                {
                    news.map((News, i) => {
                        let imagen = News.imagen ? `${URL_API}/file/${News.imagen}` : null;
                        return (
                            <div className="news-news-body">
                                <p className="home-date">
                                    Fecha: <small>{moment(News.fecha_creacion).format("YYYY-MM-DD")}</small>
                                </p>
                                <h3 className="align-self-start">{News.titulo}</h3>
                                <p className="justify-selft-center">{News.descripcion}</p>

                                {imagen && (
                                    <figure>
                                        <img
                                            height="250"
                                            width="500"
                                            src={imagen}
                                            alt=""
                                        />
                                    </figure>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </article>
    </section>
);

export default NewsView;