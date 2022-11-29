import {useEffect, useState} from "react";
import Service from "../../services/Service";
import {VscAccount} from 'react-icons/vsc';
import {SlOptionsVertical} from 'react-icons/sl';
import './engaged.css'

export default function EngagedPages() {
    const [engaged, setEngaged] = useState([]);

    useEffect(() => {
        loadEngaged();
    }, [])

    const loadEngaged = async () => {
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