import React from 'react';
import '../Styles/Home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './Quicksearches';
import axios from 'axios';


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            mealtypes: []
        }
    }

    componentDidMount() {

        sessionStorage.setItem('area', undefined);
        sessionStorage.setItem('city', undefined);

        axios({
            method: 'GET',
            url: 'http://localhost:6503/api/getAllLocations',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => this.setState({ locations: res.data.locations }))
            .catch(err => console.log(err))


        axios({
            method: 'GET',
            url: ' http://localhost:6503/api/mealtype',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => this.setState({ mealtypes: res.data.mealtype }))
            .catch(err => console.log(err))
    }

    render() {
        const { locations, mealtypes } = this.state;
        return (
            <React.Fragment>
                <Wallpaper locations={locations} />
                <QuickSearch mealtypes={mealtypes} />
            </React.Fragment>
        )
    }
}

export default Home;