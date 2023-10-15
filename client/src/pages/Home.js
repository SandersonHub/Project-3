import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_CONSOLE } from '../utils/queries';

const Home = () => {
    // const { loading, data } = useQuery(QUERY_CONSOLE, {
    //     fetchPolicy: "no-cache"
    // });

    // const consoleList = data?.console || [];

    return (
        <div className="card bg-white card-rounded w-100">
            <div className="card-header bg-dark text-center">
                <h1>Welcome to Just PA$$ Games</h1>
            </div>
            <div className="card-body m-5">
                <h2>Choose a gaming console</h2>
                    <div className="row m-3">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        XBox
                                    </h5>
                                    <img src="xbox-icon.png" className='w-100' />
                                    <Link to="/xbox">
                                        <button className="btn btn-lg">GAMES</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Playstation
                                    </h5>
                                    <img src="playstation-logo.png" className='w-100' />
                                    <Link to="/playstation">
                                        <button className="btn btn-lg">GAMES</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Switch
                                    </h5>
                                    <img src="switch.png" className='w-100' />
                                    <Link to="/switch">
                                        <button className="btn btn-lg">GAMES</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="card-footer text-center m-3">
                <h2>View Saved Games</h2>
                <Link to="/saved">
                    <button className="btn btn-lg btn-danger">Saved Games</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;