// import React, { useState } from 'react'
// import './Home.css'
// import Sidebar from '../../Component/Sidebar/Sidebar'
// import Feed from '../../Component/Feed/Feed'
// function Home({sidebar}) {
//   const[catagory,setcatagory]=useState(0)
//   return (
//     <>
//     <Sidebar sidebar={sidebar} catagory={catagory} setcatagory={setcatagory}/>
//     <div className={`container ${sidebar?'':'large-container'}`}>
//       <Feed catagory={catagory}/>
//     </div>
//     </>
//   )
// }

// export default Home
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Hello, the Home route is working ✅</h1>
    </div>
  );
}

export default Home;
