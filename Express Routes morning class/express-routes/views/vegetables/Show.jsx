const React = require('react')

//class component
//we are inheriting from react.component
class Show extends React.Component {
    render() {
        //object destructuring
        const { name, color, readyToEat} = this.props.vegetable
        
        
        console.log(this.props.vegetable)  
        return(
            <div>

                    <h1> Show Page </h1>
                    <p>
                        The {name} is {color}.
                    </p>
                    {/* <p>
                        {readyToEat ? 'It is ready to eat':'It is not ready to eat'}
                    </p> */}
                    <nav>
                        <a href ="/vegetables">BACK</a>
                    </nav>
             </div>
        )
    }

}

module.exports = Show