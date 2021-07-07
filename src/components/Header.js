import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Buttons from './Buttons'



const Header = ({title, onClick,showAdd}) => {
    
    const location = useLocation()
    return (
        <header
        className="header">
        <h1>{title}</h1>
        { location.pathname === '/' && (
        <Buttons onClick = {onClick}
                 color={!showAdd ? "green" : "red"} 
                 text={!showAdd ? "Add" : "Close"}/>)
        }
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string,
}
export default Header
