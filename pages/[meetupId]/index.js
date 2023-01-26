import { Fragment } from "react"
import MeetupDetail from "components/meetups/MeetupDetail";
import { useRouter } from "next/router";
import { MongoClient} from "mongodb";
import { ObjectId } from "mongodb";
import Head from "next/head";
function MeetupDetails(props){
    return (
      <>
        <Head>
          <title>React Meetups | {props.meetUpData.title}</title>
          <meta
            name="description"
            content="Browse a huge list of highly active react meetups"
          ></meta>
        </Head>
        <MeetupDetail
          image={props.meetUpData.image}
          title={props.meetUpData.title}
          address={props.meetUpData.address}
          description={props.meetUpData.description}
        ></MeetupDetail>
      </>
    );
    
}
export async function getStaticPaths(){
    const client = await MongoClient.connect(
        "mongodb+srv://rielgbrl:dsVW0YsJUKxYI6fD@cluster0.4j6wns2.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({},{_id: 1}).toArray()
    
    return {
        fallback: 'blocking',
        paths: meetups.map((meetup) => ({
            params: {meetupId: meetup._id.toString()}
        }))
    }
    
}

export async function getStaticProps(context){
    
    const meetupId = context.params.meetupId.toString();
    console.log(meetupId)
    const client = await MongoClient.connect(
      "mongodb+srv://rielgbrl:dsVW0YsJUKxYI6fD@cluster0.4j6wns2.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const c = await meetupsCollection.find().toArray()
    console.log(c)
    const meetupSelected = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    console.log(meetupSelected)
    
    client.close();
    
    
    return {
        props: {
            meetUpData: {
                id: meetupSelected._id.toString(),
                title: meetupSelected.title,
                address: meetupSelected.address,
                image: meetupSelected.image,
                description: meetupSelected.description

            }
        }
    }
}

export default MeetupDetails