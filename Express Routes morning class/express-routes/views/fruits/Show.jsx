const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//class component
//we are inheriting from react.component
class Show extends React.Component {
    render() {
        //object destructuring
        const { name, color, readyToEat, _id} = this.props.fruit
        
        
        console.log(this.props.fruit)  
        return(
            <DefaultLayout title={`${name} details`} foodGroup="fruits">
            
                <div>

                    <h1> Show Page </h1>
                    <p>
                        The {name} is {color}.
                    </p>
                    <p>
                        {readyToEat ? 'It is ready to eat':'It is not ready to eat'}
                    </p>

                    <button>
                        <a href="{`/fruits}
                    </button>

                    <form action={`/fruits/${_id}?_method=DELETE`} method="POST">   //instead of method=delete we are using method=POST so we need to install a package(npm i method-override) because html forms will only take get/post but in react we dont need that
                        <input type="submit" value="Delete" />
                    </form>
                    <nav>
                        <a href ="/fruits">BACK</a>
                    </nav>
                </div>

             </DefaultLayout>
        )
    }

}

module.exports = Show