import {SlOptionsVertical} from 'react-icons/sl';
import './engaged.css';
import { useNavigate } from "react-router-dom";

export default function ListPages({data}) {
    const navigate = useNavigate();
    const errorHandler = (event) => {
        event.currentTarget.src = 'https://img.icons8.com/ios/50/null/user-male-circle.png';
        event.currentTarget.className = 'error';
    }

    return (<>
        <div className='list' >
            {data.map((item) => <div key={item.pageId} className='list-engaged' onClick={() => navigate(`/detail/${item.instagramId}`)}>
                <div className='left'>
                    <img className='profile' src={item.profilePicUrl}
                         onError={errorHandler}
                         style={{width: '40px'}}
                         alt=""
                    />
                    <div className='identity'>
                        <div className='instagram-id'>@{item.instagramId}</div>
                        <div className='full-name'>{item.fullName}</div>
                    </div>
                </div>
                <div className='right'>
                    <div className='category'>
                        <div className={item.parenIconUrl !== null && item.parentCategory !== null ? 'active' : 'none'}>
                            <img src={item.parentIconUrl} style={{width: '15px'}}
                                 alt=""
                            />
                            <span> {item.parentCategory}</span>
                        </div>
                        <div
                            className={item.category === null || item.category === "" ? 'none' : 'active'}>{item.category}</div>
                    </div>
                    <div className='category-icon'>
                        <SlOptionsVertical size={16}/>
                    </div>
                </div>
            </div>)}
        </div>
    </>);
}