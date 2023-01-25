import NewMeetupForm from "components/meetups/NewMeetupForm"

function NewMeetUpPage(){
    function addMeetUpHandler(enteredMeetUp){
        console.log(enteredMeetUp)
    }

    return <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>
}

export default NewMeetUpPage