export const Footer = () => {

    const scrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            return window.scrollTo(0, 0)
        }
    }


    return (
        <footer>
            <button className="scrollUp" onClick={() => scrollUp()}>sfsrg</button>
        </footer>
    )
}