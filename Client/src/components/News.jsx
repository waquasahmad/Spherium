import React from 'react'
import mobile from "../resources/images/mobile.png";

const allNews = [
    {
        id: "news1",
        newsImg: mobile,
        newsDescription1: "Lorem ipsum dolor sit amet dolor loreum ipsum",
        newsDescription2: "Aiming to be a decentralised platform for some of the most advanced DeFi products and assets protocols, whereby users can manage and trade assets on large liquidity pools cost effectively.",
    },
    {
        id: "news1",
        newsImg: mobile,
        newsDescription1: "Lorem ipsum dolor sit amet dolor loreum ipsum",
        newsDescription2: "Aiming to be a decentralised platform for some of the most advanced DeFi products and assets protocols, whereby users can manage and trade assets on large liquidity pools cost effectively.",
    },
    {
        id: "news1",
        newsImg: mobile,
        newsDescription1: "Lorem ipsum dolor sit amet dolor loreum ipsum",
        newsDescription2: "Aiming to be a decentralised platform for some of the most advanced DeFi products and assets protocols, whereby users can manage and trade assets on large liquidity pools cost effectively.",
    },
]

const News = () => {
    return (
        <div>
            <div className="news row">
                <div className="col-12 title prm0"> Spherium in the news </div>
                {
                    allNews.map((news) => {
                        return (
                            <div className="col-md-4 col-sm-12 news-section prm0">
                                <div className="news-inner-section">
                                    <img src={news.newsImg} className="mobile" />
                                    <div className="news-description">
                                        <p>{news.newsDescription1}</p>
                                        <p>{news.newsDescription2}</p>
                                        <a href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News
