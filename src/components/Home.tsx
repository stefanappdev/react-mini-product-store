import { Link,Outlet }from "react-router-dom"

const Home=()=>{

    return(

        <div id='Home'>


        <h1>Welcome to our Store</h1>

        <nav>
            <Link to='products/view'>View products</Link>
            <Link to='/about/view'>About us</Link>
            <Outlet/>
        </nav>






        </div>



    )

}



export default Home