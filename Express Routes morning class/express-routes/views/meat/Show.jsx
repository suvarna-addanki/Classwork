const React = require('react')

const DefaultLayout = require('../layouts/DefaultLayout')

//class component
//we are inheriting from react.component
class Show extends React.Component {
    render() {
        //object destructuring
        const { name, type, readyToEat} = this.props.meat
        
        
        console.log(this.props.meat)  
        return(
            <DefaultLayout title={`${name} details`} foodGroup="meats">
            <div>

                    <h1> Show Page </h1>
                    <p>
                        The {name} is {type}.
                    </p>
                    {/* <p>
                        {readyToEat ? 'It is ready to eat':'It is not ready to eat'}
                    </p> */}
                    <nav>
                        <a href ="/meat">BACK</a>
                    </nav>
             </div>
             </DefaultLayout>
        )
    }

}

module.exports = Show