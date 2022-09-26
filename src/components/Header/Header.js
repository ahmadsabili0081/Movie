import PropTypes from 'prop-types'
import StyleHeader from './Header.module.css'

let Header = (props) => {
  return(
    <header className={StyleHeader.header}>
      <div className={StyleHeader.Container_header}>
        <div className={StyleHeader.logo}>Movie List</div>
        {props.children}
      </div>
    </header>
  ) 
}
Header.propTypes = {
  children  : PropTypes.node
}
export default Header;