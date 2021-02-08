import './Header.css';

const Header = () => {

    return (
        <>
            <header className="row">
                <div className="col-sm-8 text-center text-sm-left">
                    <h1 className="m-0 Header-h1">Task Tracker</h1>
                </div>
                <div className="col-sm-4 align-self-center">
                    <button className="btn btn-dark btn-block">Add</button>
                </div>
            </header>
            <div className="row" aria-hidden="true">
                <div className="col">
                    <hr />
                </div>
            </div>
        </>
    );

}

export default Header;
