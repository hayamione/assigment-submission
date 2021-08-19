
import Service from './Service';

function Header(){

    const services=[
        {
            title:"Search Engine Optimization",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ atuis aute irure dolor in reprehenderit.",
            image:"https://squareit.in/img/pages/search-engine-optimization.jpeg"
        },
        {
            title:"Search Engine Marketing",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ atuis aute irure dolor in reprehenderit.",
            image:"https://squareit.in/img/pages/search-engine-marketing-service-provider-company.jpg"
        },
        {
            title:"Social Media Marketing",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ atuis aute irure dolor in reprehenderit.",
            image:"https://squareit.in/img/pages/social-media-marketing.jpeg"
        },
        {
            title:"Social Media Optimization",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ atuis aute irure dolor in reprehenderit.",
            image:"https://squareit.in/img/pages/social-media-optimization.jpg"
        },
        {
            title:"Affiliate Marketing",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ atuis aute irure dolor in reprehenderit.",
            image:"https://squareit.in/img/pages/affiliate-marketing-img.jpg"
        },
        {
            title:"E-mail Marketing",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ atuis aute irure dolor in reprehenderit.",
            image:"https://squareit.in/img/pages/email-marketing.jpg"
        }
    ]

    return (

        <div class="container">
            {/* <Service title="Search Engine Marketing" desc="Dummy Data"/>
            <Service title="Search Engine Optimization" desc="Dummy Dataa"/> */}          
            
            {
                services.map((service,index)=>(  

                <Service title={service.title} desc={service.desc} image={service.image} />       
                            )
                            )
            }  
        </div>
       
    )

}


export default Header;