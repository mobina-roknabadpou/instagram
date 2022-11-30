import {useEffect, useState} from "react";
import service from "../../services/Service";
import {useParams} from "react-router-dom";
import './detailPages.css';
import {VscQuestion} from 'react-icons/vsc'

export default function DetailPages() {
    const [details, setDetails] = useState({});
    let { userId : id} = useParams();
    useEffect(()=>{
        loadDetails();
    })

    const loadDetails = async ()=>{
        const result = await service.getDetailsApi(id);
        setDetails(result);
        console.log(id);
    }
    return (
        <>
        </>
    );

}