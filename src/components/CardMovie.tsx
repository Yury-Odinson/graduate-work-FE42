export const CardMovie = () => {
    return (
        <>
            <div className="movie-item">
                <img className="movie-item__image" src="https://basecourse.ru/css/images/sizeimage.jpg" alt="asdf" />
                <div className="movie-item__rating">7.6</div>
                <span className="movie-item__name">Star Wars: The Rise of Skywalker</span>
                <ul className="movie-item__genres">
                    <li className="movie-item__genre">Action</li>
                    <li className="movie-item__genre">Fantasy</li>
                    <li className="movie-item__genre">Fiction</li>
                </ul>
            </div>
        </>
    )
}
