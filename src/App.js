import React from 'react';
import Nav from './Nav';
import MainLanding from './Main_Landing';
import MainProducts from './Main_Products';
import MainAbout from './Main_About';
import MainAppointment from './Main_Appointment_new';
import Footer from './Footer';


function App() {
  // const name = 'Ping'
  // const x = true
  // //let num = 0
  // const [num, setNum] = useState(0)

  // function MyFunc() {
  //   //num = num + 1
  //   setNum(num + 1)
  //   console.log('hi' + num)

  return (
    <div>
      {/* <h1>Hello From React</h1>
      <h2>Hello {x ? name + num : 'nobody'}</h2>
      <h2>The current count is: {num}</h2>
      <button onClick ={MyFunc}>click me</button> */}

      <Nav />
      <MainLanding />
      <MainProducts />
      <MainAbout />
      <MainAppointment />
      <Footer />
    </div>
  );
}

export default App;
