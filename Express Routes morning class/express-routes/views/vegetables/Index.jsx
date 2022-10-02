const React = require('react')
class Index extends React.Component{ 
    render() {
        
        //object desturcturing
        const {vegetables} =this.props;  
        return(
            <div>
                <h1>Vegetables Index page</h1>
                <ul>                           
                    {vegetables.map((vegetable, i) => {
                        return(
                            <li key = {i}>    
                                The <a href={`/vegetables/${i}`}>{vegetable.name}</a> is {vegetable.color}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href ="/vegetables/new">Create New vegetable</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index