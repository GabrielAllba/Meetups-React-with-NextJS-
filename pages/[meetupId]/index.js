import { Fragment } from "react"
import MeetupDetail from "components/meetups/MeetupDetail";
import { useRouter } from "next/router";
function MeetupDetails(props){
    return (
      <>
        <h1>{props.meetUpData.id}</h1>
        <MeetupDetail
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
          title="Wikipedia meetup"
          address="Wikipedia address"
          description={props.meetUpData.description}
        ></MeetupDetail>
      </>
    );
    
}
export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {params: {
                meetupId: 'm1'
            }},
            {params: {
                meetupId: 'm2'
            }}
        ]
    }
}

export async function getStaticProps(context){
    // fetch data for a single meetup
    const meetupId = context.params.meetupId
    
    return {
        props: {
            meetUpData: {
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png',
                id: meetupId,
                title: 'Wikipedia Meetup',
                address: 'Wikipedia addres',
                description:'wikipedia description'
            }
        }
    }
}

export default MeetupDetails