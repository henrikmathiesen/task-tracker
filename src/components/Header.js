import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ onAddClick, showAddTask }) => {

    return (
        <>
            <header className="row">
                <div className="col-sm-8 text-center text-sm-left">
                    <h1 className="m-0 text-danger Header-h1">Task Tracker</h1>
                </div>
                <div className="col-sm-4 align-self-center">
                    <button className="btn btn-dark btn-block Header-add-button" onClick={onAddClick}>{!showAddTask ? 'Add' : 'Hide'}</button>
                </div>
            </header>
            <div className="row mb-4" aria-hidden="true">
                <div className="col">
                    <hr />
                </div>
            </div>
        </>
    );

}

Header.propTypes = {
    onAddClick: PropTypes.func.isRequired,
    showAddTask: PropTypes.bool.isRequired
};

export default Header;
