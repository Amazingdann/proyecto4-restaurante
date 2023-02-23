import { BsIcons } from 'react-icons/bs';
import { SiIcons } from 'react-icons/si';


function RedesLinks(props) {



    const linksRedesSociales=[
        {
    id:1,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/daniel-alvarez-5a7771aa',
    logo: <BsIcons.BsLinkedin/>
    
    },
    {
    id:2,
    name: 'Instagram',
    url: 'https://www.instagram.com/amazingdann/',
    logo: <BsIcons.BsInstagram/>
    
    
    },
    {
    id:3,
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    logo: <BsIcons.BsFacebook/>
    
    },
    {
    id:4,
    name: 'Tik Tok ',
    url: 'https://www.tiktok.com/en/',
    logo: <SiIcons.SiTiktok/>,
        
        }
    
    ]




    return ( 
        <>
            <ol className="card text-bg-dark mb-3">
                {
                    props.links.map((item)=>{
                        return(
                        <li className="card-body">
                            <a  className="card-text" href={item.url}>{item.name}</a>
                        </li>
                        )
                    })
                }
            </ol>


        </>
     );
}

export default RedesLinks;