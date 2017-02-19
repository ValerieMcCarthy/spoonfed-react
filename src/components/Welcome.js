import React from 'react'



export default function Welcome(){
  return(
    <div className='container center'>
      <h1>SpoonFed</h1>
      <h3 className='italic'>Bringing inspiration to your parties </h3>
     	 <div className="row">
     	 	<div className="col s6">
         		<a href="/signup" className="waves-effect waves-light btn-large red-background">Signup<i className="material-icons right">send</i></a>
         	</div>
         	<div className="col s6">
         		<a href="/login" className="waves-effect waves-light btn-large red-background">Login<i className="material-icons right">send</i></a>
         	</div>
         </div>
    </div>
  )
}
