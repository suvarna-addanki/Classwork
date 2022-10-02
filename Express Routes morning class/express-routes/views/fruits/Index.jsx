const React = require('react')

const DefaultLayout = require('../layouts/DefaultLayout')

class Index extends React.Component{ 
    render() {
        
        //object desturcturing
        const {fruits} =this.props;   
        //map method: 
        // loops over array and
        //  manipulates data at each index and 
        //  returns new array with new data

        /*
            [
                { name: 'Pear' ... },
                { name: 'Banana' ... },
                { name: 'Apple' ...}
            ]
        */ 
            // After we map over it

        /*
            [element, element, element]
        */

        //each li tag can have unique tag
        return(
            <DefaultLayout title="All Fruit" foodGroup="fruits">
            <div>
                <h1>Fruits Index page</h1>
                <ul id="fruits-index">                           
                    {fruits.map((fruit) => {
                        return(
                            <li key = {fruit._id}>    
                                The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href ="/fruits/new">Create New Fruit</a>
                </nav>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index