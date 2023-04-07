import React from 'react';
import '../Styles/Home.css';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {

    render() {
        const { mealtypes } = this.props;
        return (
            <div>
                <div className="quicksearch">
                    <p className="quicksearchHeading">
                        Quick Searches
                        </p>
                    <p className="quicksearchSubHeading">
                        Discover restaurants by type of meal
                        </p>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-sm-12  col-md-6 col-lg-4">
                            {mealtypes.map((item) => {
                                return <QuickSearchItem id={item.meal_type} name={item.name} content={item.title} image={item.image} />
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch;