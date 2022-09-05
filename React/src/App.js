// import logo from './logo.svg';
// import { render } from 'react-dom';

import './App.css';
// import './abc.js';
// fetch('http://localhost/aboutus').then((res)=> res.json()).then((data)=>{

//   var emailandcomments=Object.values(data);
//   for (var i=0; i<emailandcomments[0].length;i++){
//   console.log(emailandcomments[0][i].email);
//   console.log(emailandcomments[0][i].Comment);
// }

// document.getElementsByClassName('sagar')[0].innerHTML='yes'
// document.getElementById('sagar').innerHTML = "yes"
// }
// )

// console.log(emailandcomments+'jfnskdbfksbdf')



// for (var i=0; i<10;i++){
//   console.log(i);
// }
// ('.sagar').html('okey ');

function App() {
  
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light nav1 " >
    <a className="navbar-brand nav2" href="http://localhost/desktop"><strong>Lets! Play Beat</strong></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto list" >
        <li className="nav-item active">
          <a className="nav-link" href="http://localhost/desktop"><strong>Home</strong> <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="http://localhost:3000/"><strong>About Us</strong></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="http://localhost/Latest"><strong>Latest Songs</strong></a>
        </li>
      </ul>

    </div>
  </nav>


  <section className="bgwhite p-t-66  ap" >
    <div className="container" >
        <div className="row">
            <div className="col-md-4 img">
                <div className="hov-img-zoom ">
                    <img className='image' src="https://avatars.githubusercontent.com/u/60397881?v=4" width="370px" height="400px" alt="IMG-ABOUT"/>
                </div>
            </div>

            <div className="col-md-8 ">
                <h3 className="m-text26 p-t-15 p-b-16">
                    Our story
                </h3>

                <p className="p-b-28">
                    Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                </p>

                <div className="bo13 p-l-29 m-l-9 p-b-10">
                    <p className="p-b-11">
                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                    </p>

                    <span className="s-text7">
                        - Sagar Jangid
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
      );
}

export default App;
