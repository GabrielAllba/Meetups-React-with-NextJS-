import NewMeetupForm from "components/meetups/NewMeetupForm"
import { useRouter } from "next/router"
import Head from "next/head"

function NewMeetUpPage(){
    const router = useRouter()

    async function addMeetUpHandler(enteredMeetUp){
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetUp),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
        router.push('/')
    }

    return (
      <>
        <Head>
          <title>React Meetups | New Meetups</title>
          <meta
            name="description"
            content="Browse a huge list of highly active react meetups"
          ></meta>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>
      </>
    );
}

export default NewMeetUpPage