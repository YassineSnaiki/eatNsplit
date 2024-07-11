

export default function FriendItem({friend,selected,setSelected}) {
    let status;
    status = friend.balance < 0 ? `You owe ${friend.name} $${-friend.balance}`:friend.balance > 0 ? `${friend.name} owes you $${friend.balance}`:`You and ${friend.name} are even`;

  return (
    <li className={` rounded-md p-4 grid grid-cols-[auto,1fr,auto] items-center ${selected===friend.id && "bg-blue-100"}`}>
      <img src={friend.image} alt="profile" className="rounded-full" />
      <div className=" pl-6">
        <span className=" font-bold">{friend.name}</span>
        <p style={
            {
                color : friend.balance<0 ?"red" : friend.balance> 0 ? "green" : "black"
            }
        }>{status}</p>
      </div>
      <button className=" px-3 py-1  bg-blue-400 rounded-md" onClick={()=>setSelected(selected=>friend.id!==selected ? friend.id : 0)}>{selected===friend.id?"Close":"Select"}</button>
    </li>
  )
}
