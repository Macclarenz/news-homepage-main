export default function Article({ title, description, image, index }) {
    const { url, alt } = image;
    index++;
    return (
        <article className="article-news" id={"article-news" + index}>
            <img src={url} alt={alt} className="article-news-image" />
            <section className="article-news-text-container">
                <p className="article-news-index">
                    {index < 10 ? "0" + index : index}
                </p>
                <h4 className="article-news-title">{title}</h4>
                <p className="article-news-description">{description}</p>
            </section>
        </article>
    );
}
