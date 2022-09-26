import PropTypes from 'prop-types'
import styleMove from './Movies.module.css'
import starIcon from '@fortawesome/free-solid-svg-icons'
let Movies = (props) => {
  const imgURL = "https://image.tmdb.org/t/p/w1280"
  return(
    props.movies.map((itemMovie,index) => {
      return(
        <div className={styleMove.box__list} key={index}>
            <img src={imgURL + itemMovie.poster_path} alt={itemMovie.title} />
            <div className={styleMove.text__movies}>
              <div className={styleMove.text__overview}>
                <h3>{itemMovie.title}</h3>
                {itemMovie.overview}
              </div>
              <h3 className={styleMove.title}>{itemMovie.title}</h3>
              <div className={styleMove.rating__movies}>
                <span className={styleMove.releaseDate}>{itemMovie.release_date}</span>
                <span className={styleMove.releaseVote}>{itemMovie.vote_average}</span>
              </div>
            </div>
        </div>
      )
    })
  )
}
Movies.propTypes = {
  movies : PropTypes.arrayOf(PropTypes.shape({}))
}
export default Movies;