import Article from "./Article"

export default function ArticleNews({articles}) {
    const articleNews = articles.map((article, index) => {
        const {title, description, image} = article
        return (
            <Article title={title} description={description} image={image} index={index} key={index} />
        )
    }) 

    return (
        <div className="article-container">
            {articleNews}
        </div>
    )
}