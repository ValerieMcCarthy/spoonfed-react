import React from 'react'



export default function Welcome(){
  return(
    <div className='container center welcome'>
      <h2>SpoonFed</h2>
      <h4 className='italic'>Bringing inspiration to your parties </h4>



  <div className="row">

    <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img src="https://res.cloudinary.com/projects/image/upload/v1487269053/sample.jpg"/>
          <span className="card-title"></span>
        </div>
        <div className="card-content">
          <p>Inspiration</p>
        </div>
      </div>
    </div>

     <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img src="https://res.cloudinary.com/projects/image/upload/v1487343851/fw5wzo0gi5khex8fawnr.jpg"/>
          <span className="card-title center"></span>
        </div>
        <div className="card-content">
          <p>Action</p>
        </div>
      </div>
    </div>

    <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img src="https://res.cloudinary.com/projects/image/upload/v1487354289/porvt2ov4ftpkzlggj4t.jpg"/>
          <span className="card-title"></span>
        </div>
        <div className="card-content">
          <p>Organization</p>
        </div>
      </div>
    </div>

  </div>

  { sessionStorage.id ? <div className="row">
    <div className="col s12">
      <a href="/parties/new" className="waves-effect waves-light btn-large red-background">Make a Party<i className="material-icons right">send</i></a>
    </div>
  </div> :
     	  <div className="row">
     	 	  <div className="col s6">
         		<a href="/signup" className="waves-effect waves-light btn-large red-background">Signup<i className="material-icons right">send</i></a>
         	</div>
         	<div className="col s6">
         		<a href="/login" className="waves-effect waves-light btn-large red-background">Login<i className="material-icons right">send</i></a>
         	</div>
        </div> }

    </div>

  )
}

  // <div className="row">
  //         <div className="col s4">
  //           <img className="responsive-img" src="https://res.cloudinary.com/projects/image/upload/v1487269053/sample.jpg"/>
  //         </div>
  //         <div className="col s4">
  //           <img className="responsive-img" src="https://res.cloudinary.com/projects/image/upload/v1487354289/porvt2ov4ftpkzlggj4t.jpg"/>
  //         </div>
  //         <div className="col s4">
  //           <img className="responsive-img" src="https://res.cloudinary.com/projects/image/upload/v1487354418/aqrsv1dasrq9rboxqfdt.jpg"/>
  //         </div>


  //        </div>
