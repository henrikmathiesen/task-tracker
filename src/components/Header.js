const Header = () => {

    return (
        <>
            <header className="row">
                <div className="col-sm-8 text-center text-sm-left">
                    <h1 className="m-0">Task Tracker</h1>
                </div>
                <div className="col-sm-4 align-self-center">
                    <button className="btn btn-primary btn-block">Add</button>
                </div>
            </header>
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
        </>
    );

}

export default Header;
