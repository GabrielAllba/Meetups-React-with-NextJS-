// ourd-domain.com/

import Layout from "components/layout/Layout";
import { Fragment } from "react"
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

function HomePage(){
    return<MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
}
export default HomePage