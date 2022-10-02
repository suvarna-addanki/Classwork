const React = require('react')

const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component{ 
    render() {
        return(
            <DefaultLayout title="create a new meat" foodGroup="meats">
            <div>
                <h1>New Page</h1>
                <form action = "/meat" method="POST">
                
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor='type'>Type:</label>
                    <input type="text" id="type" name="type" />

                    {/* <label htmlFor='readyToEat'>Is Ready To Eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" /> */}

                    <input type="submit" value = "Create Meat" />

                </form>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = New