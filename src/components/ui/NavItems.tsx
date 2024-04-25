import { Link } from "react-router-dom";

export default function({active , to , children} :{active:boolean , to:string , children:React.ReactNode} ){

    return <div className={''}>
            <Link to = {to} >
                    {children}
            </Link>
    </div> 


}