import {useEffect, useState} from "react";
import Service from "../../services/Service";
export default function EngagedPages() {
    const [engaged,setEngaged] = useState([]);

    useEffect(() => {
            loadEngaged();
        },
        [])

    const loadEngaged = async ()=>{
        const result = await Service.getTopEngaged();
        console.log(result);
        setEngaged(result);
    }
    return(
        <>
            <div className='list'>

            </div>
        </>
    );
}