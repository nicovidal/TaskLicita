import { useEffect, useState } from "react"


export const HeadDate = () => {

   const [todayDate, setTodayDate  ] = useState('')
   
   useEffect(() => {

    const today = new Date();
    const options={year:'numeric',month:'numeric',day:'numeric'}
    const formattedDate = today.toLocaleDateString(undefined, options);
    setTodayDate (formattedDate )

   }, [])
   

  return (
    <>
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" ,marginTop:"20px"}}>
         <h1 className="me-4">Cosas por hacer</h1>
         <h3 style={{ marginLeft: "17rem" }}>Hoy: {todayDate}</h3>
      </div>
    </>
  )
}
