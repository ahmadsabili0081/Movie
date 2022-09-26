import StyleSearch from './Search.module.css'
import PropTypes from 'prop-types'
let Search = (props) => {
  return(
    <form className={StyleSearch.form}>
          <input className={StyleSearch.inputSearch} input="text" onChange={props.handleValueSubmit} value={props.value} placeholder="Write Something..."></input>
          <button className={StyleSearch.buttonSearch} onClick={props.handleSubmit} type='submit'>Search</button>
    </form>
  )
}
Search.propTypes = {
  handleValueSubmit : PropTypes.func,
  handleSubmit : PropTypes.func,
  value : PropTypes.string,
}
export default Search;