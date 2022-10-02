const React = require('react')

const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component{ 
    render() {
        console.log(this.props.fruit)
        return(
            <DefaultLayout title="Edit A  Fruit" foodGroup="fruits">
            <div>
                <h1>Edit page</h1>
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
        )