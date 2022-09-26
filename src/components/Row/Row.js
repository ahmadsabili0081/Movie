import styleRow from './Row.module.css'
import PropTypes from 'prop-types'

let Row = (props) => {
  return(
    <div className={styleRow.container__movies}>
      <div className={styleRow.row__movies}>
      {props.children}
      </div>
    </div>
  );
}
Row.propTypes = {
  children : PropTypes.node
}
export default Row;