export default function ({ name, url, index }) {
    return (
        <a href={url} id={"navLink-" + (index + 1)} className="nav-link">
            {name}
        </a>
    );
}
