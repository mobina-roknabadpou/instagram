import {useEffect, useState} from "react";
import service from "../../services/Service";
import {useParams} from "react-router-dom";
import './detailPages.css';
import {VscQuestion} from 'react-icons/vsc'

export default function DetailPages() {
    const [details, setDetails] = useState({});
    let {userId: id} = useParams();
    const followers = details.followerCount;
    const avgLikes = details.avgLike;
    const periodEngRate = details.engagement*100;
    const totalEngRate = details.totalEngagement*100;

    const handleFollowers = ()=>{
        if (followers > 1000000){
            return followers/1000 + " M";
        }else{
            return followers/1000 + " K"
        }
    }

    const handleAvgLike = ()=>{
        if (avgLikes > 1000000){
            return avgLikes/1000 + " M";
        }else{
            return avgLikes/1000 + " K"
        }
    }

    useEffect(() => {
        loadDetails();
    })

    const loadDetails = async () => {
        const result = await service.getDetailsApi(id);
        setDetails(result);
        console.log(id);
    }

    const errorHandler = (event) => {
        event.currentTarget.src = 'https://img.icons8.com/ios/50/null/user-male-circle.png';
        event.currentTarget.className = 'error';
    }

    return (
        <>
            <div className='detail-pages'>
                <div className='profile-detail'>
                    <img src={details.profilePic} alt="" onError={errorHandler}/>
                    <div>
                        <div className='userid' style={{color: "blue"}}>@{details.instagramId}</div>
                        <div className='full-name'>{details.fullName}</div>
                    </div>
                </div>
                <div className='container-details'>
                    <div className='row'>
                        <div className='box' style={{backgroundColor: "cornflowerblue"}}>
                            <div className='inner-box' style={{color: "white"}}>
                                <div className='icon'>
                                    <span>Followers</span>
                                    <VscQuestion/>
                                </div>
                                <div className='title'>{handleFollowers()}</div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='inner-box'>
                                <div className='icon'>
                                    <span>Period Eng Rate</span>
                                    <VscQuestion/>
                                </div>
                                <div className='title'>{periodEngRate.toFixed(2)}%</div>
                            </div>
                        </div>
                        <div className='box' style={{backgroundColor: "mediumseagreen"}}>
                            <div className='inner-box'>
                                <div className='title'>{details.postPerDay}</div>
                                <div className='icon'>
                                    <span>Post Per day</span>
                                    <VscQuestion/>
                                </div>
                            </div>
                        </div>
                        <div className='box' style={{backgroundColor: "orangered"}}>
                            <div className='inner-box'>
                                <div className='icon'>
                                    <span>Avg Likes</span>
                                    <VscQuestion/>
                                </div>
                                <div className='title'>{handleAvgLike()}</div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='box'>
                            <div className='inner-box'>
                                <div className='icon'>
                                    <span>Following</span>
                                    <VscQuestion/>
                                </div>
                                <div className='title'>{details.followingCount}</div>
                            </div>
                        </div>
                        <div className='box' style={{backgroundColor: "orange"}}>
                            <div className='inner-box'>
                                <div className='icon'>
                                    <span>Total Eng Rate</span>
                                    <VscQuestion/>
                                </div>
                                <div className='title'>{totalEngRate.toFixed(2)}%</div>
                            </div>
                        </div>
                        <div className='box' style={{backgroundColor: "mediumseagreen"}}>
                            <div className='inner-box'>
                                <div className='icon'>
                                    <span>Total Posts</span>
                                    <VscQuestion/>
                                </div>
                                <div className='title'>{details.totalPost}</div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='inner-box'>
                                <div className='icon'>
                                    <span>Avg comments</span>
                                    <VscQuestion/>
                                </div>
                                <div className='title'>{details.avgComment}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}