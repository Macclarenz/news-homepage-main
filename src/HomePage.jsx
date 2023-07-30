import Heading from "./components/Heading";
import Headline from "./components/Headline";
import data from "../data";
import SideNews from "./components/SideNews";
import ArticleNews from "./components/ArticleNews";

function HomePage() {
    const { headline, news, articles } = data;
    const { title, description, image } = headline;
    return (
        <>
            <Heading />
            <main>
                <Headline
                    title={title}
                    description={description}
                    url="#"
                    image={image}
                ></Headline>
                <aside className="side-news-container">
                    <h2 className="side-news-heading-text">New</h2>
                    <SideNews news={news} />
                </aside>
            </main>
            <ArticleNews articles={articles} />
        </>
    );
}

export default HomePage;
