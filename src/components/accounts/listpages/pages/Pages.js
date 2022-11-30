import service from "../../../services/Service";
import {useState, useEffect} from "react";
import Service from "../../../services/Service";
import ListPages from "../ListPages";
import './pages.css'

export default function Pages() {
    const [engaged, setEngaged] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        loadPages();
    }, [])

    const loadPages = async () => {
        setLoading(true)
        try {
            const result = await Service.getTopEngaged();
            const result2 = await service.getTopFollowers();
            console.log(result);
            setEngaged(result);
            setFollowers(result2)
            setLoading(false);
        }catch (error){
            console.log(error.message())
        }

    }

    return (
        <>
            <div className='pages'>
                    <ListPages data={engaged} title={"Top Engaged"} loading={loading}/>
                    <ListPages data={followers} title={"Top Follower"} loading={loading}/>

            </div>
        </>);

}