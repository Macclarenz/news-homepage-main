export default function SideNews({ news }) {
    const sideNews = news.map((newsItem, index) => {
        return (
            <div
                className="side-news"
                id={"sideNews" + (index + 1)}
                key={index}
            >
                <h3 className="side-news-title">{newsItem["title"]}</h3>
                <p className="side-news-description">
                    {newsItem["description"]}
                </p>
            </div>
        );
    });

    return sideNews;
}
