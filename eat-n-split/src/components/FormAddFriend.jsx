
export default function FormAddFriend({showForm,setShowForm}) {
    if(!showForm) return (
        <div className="flex justify-end">
            <button onClick={()=>setShowForm(true)} className="  bg-blue-400 rounded-md basis-[50%] py-1 mt-4">Add Friend</button>
        </div>
    )
  return (
    <div>
        <form className="grid grid-cols-[auto,1fr] grid-rows-3 gap-y-4 p-4 bg-blue-200 mt-4 rounded-md">
        <label className="  pr-6">Friend Name</label>
        <input type="text"  className=" outline-none pl-2 py-1"/>
        <label className="  pr-6">Image Url</label>
        <input type="text"  className=" outline-none pl-2"/>
        <button className=" col-start-2 bg-blue-400 rounded-md">Add</button>
    </form>
    <button className=" px-2 float-end bg-blue-400 rounded-md mt-4" onClick={()=>setShowForm(false)}>Close</button>
    </div>
  )
}
