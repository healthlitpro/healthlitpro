import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";

function Home() {
     return (
    <>
      <div>
        <NavBar />
        <h1> What is HealthLitPro</h1> 
        <p>HealthLitPro is.....</p>
      </div>
      <div>
        <h2>Our Mission</h2>
        <p>To help.....</p>
        <Carousel/>
      </div>
      
    </>
  );
};



  
  export default Home;