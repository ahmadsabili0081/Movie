import ProptTypes from 'prop-types'
import styleContainer from './Container.module.css';

let Container = (props) => {
  return (
    <div className={styleContainer.container}>
      {props.children}
    </div>
  )
}
Container.ProptTypes = {
  children : ProptTypes.node
}

export default Container;
