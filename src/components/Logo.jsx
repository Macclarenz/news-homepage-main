export default function({url, srcFile, alt}) {
    return (
        <a href={url} className="heading-logo-link">
            <img className="heading-logo" src={srcFile} alt={alt} />
        </a>
    )
}