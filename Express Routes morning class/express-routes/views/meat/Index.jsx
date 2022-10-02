const React = require('react')

const DefaultLayout = require('../layouts/DefaultLayout')

class Index extends React.Component{ 
    render() {
        
        //object desturcturing
        const {meat} =this.props;  
        return(
            <DefaultLayout title="All Meat" foodgroup ="meats">
            <div>
                <h1>Meat Index page</h1>
                <ul>                           
                    {meat.map((meat) => {
                        return(
                            <li key = {meat._id}>    
                                The <a href={`/meat/${meat._id}`}>{meat.name}</a> is {meat.type}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href ="/meat/new">Create New Meat</a>
                </nav>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index