import { useState } from "react";
import FriendItem from "./FriendItem";
import FormAddFriend from "./FormAddFriend";

const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  

export default function Friends() {
    const [friends,setFriends] = useState(initialFriends);
    const [selected,setSelected] = useState(0);
    const [showForm,setShowForm] = useState(false);
  return (
    <div className="basis-[40%]">

    <ul className=" flex flex-col">
      {friends.map((f,i)=>(
          <FriendItem friend={f} key={i} selected={selected} setSelected={setSelected}/>
        ))}
    </ul>
    <FormAddFriend showForm={showForm} setShowForm={setShowForm}/>
    </div>
  )
}
