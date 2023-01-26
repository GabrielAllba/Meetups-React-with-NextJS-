// ourd-domain.com/
import { MongoClient } from "mongodb";
import Layout from "components/layout/Layout";
// import { Fragment, useEffect, useState } from "react"
import MeetupList from "components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetups",
    image:"https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    address: 'Some address 5, 1334 some city',
    description: 'This is a first meetups'
  },
  {
    id: "m2",
    title: "A Second Meetups",
    image:"https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    address: 'Some address 5, 1334 some city',
    description: 'This is a second meetups'
  },
];

function HomePage(props){
  // const [loadedMeetups, setLoadedMeetups] = useState([])

  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // },  [])
  // console.log(loadedMeetups)
  

    return <>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </>
}
// export async function getStaticProps(){
//   // fetch data from an API
  
//   const client = await MongoClient.connect(
//     "mongodb+srv://rielgbrl:dsVW0YsJUKxYI6fD@cluster0.4j6wns2.mongodb.net/?retryWrites=true&w=majority"
//   );

//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");
//   const meetups = await meetupsCollection.find().toArray()
//   client.close()

//   return{
//     props: {
//       meetups: meetups.map(meetup => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString()
//       }))
//     },
//     revalidate: 1
//   }
// }
export async function getServerSideProps(context){
   const client = await MongoClient.connect(
    "mongodb+srv://rielgbrl:dsVW0YsJUKxYI6fD@cluster0.4j6wns2.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return{
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    
  }
}

export default HomePage