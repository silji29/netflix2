import React, { useEffect, useState } from 'react';
import "../components/Header.css"

const Header = () => {
    const [isHovering, setIsHovering] = useState(0);
    const [show,setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 70){
                setShow(true);
            }else{
                setShow(false);
            }
        })
    },[])

    return (
        <div className={`header ${show && 'header-black'}`}>
            <div className="left">
                <h1 onClick={()=>window.location.href='/netflix/index.html'}>
                    Netflix
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Netflix-Logo.png/1599px-Netflix-Logo.png?20230726112108" alt="neflix 로고 이미지" />
                </h1>
                <ul className="gnb">
                    <li>홈</li>
                    <li>시리즈</li>
                    <li>영화</li>
                    <li>NEW 요즘 대세 콘텐츠</li>
                    <li>내가 찜한 리스트</li>
                    <li>언어별로 찾아보기</li>
                </ul>
            </div>
            <ul className="util">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </li>
                <li>
                    키즈
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0003 1C15.6813 1 19.0003 3.565 19.0003 7V11.539C19.0003 12.181 19.1893 12.808 19.5453 13.342L21.7453 16.64C21.898 16.8685 21.9858 17.1343 21.9992 17.4088C22.0127 17.6834 21.9513 17.9564 21.8216 18.1988C21.6919 18.4412 21.4987 18.6437 21.2628 18.7848C21.027 18.926 20.7571 19.0003 20.4823 19H15.5003C15.5003 19.4596 15.4097 19.9148 15.2338 20.3394C15.0579 20.764 14.8001 21.1499 14.4751 21.4749C14.1501 21.7999 13.7643 22.0577 13.3397 22.2336C12.915 22.4095 12.4599 22.5 12.0003 22.5C11.5406 22.5 11.0855 22.4095 10.6609 22.2336C10.2362 22.0577 9.85039 21.7999 9.52539 21.4749C9.20038 21.1499 8.94257 20.764 8.76668 20.3394C8.59079 19.9148 8.50026 19.4596 8.50026 19H3.51926C3.2445 19.0002 2.97483 18.9259 2.73901 18.7849C2.50319 18.6439 2.31006 18.4415 2.18021 18.1994C2.05036 17.9572 1.98867 17.6844 2.00171 17.41C2.01475 17.1355 2.10204 16.8697 2.25426 16.641L4.45426 13.342C4.81027 12.8081 5.00025 12.1807 5.00026 11.539V7C5.00026 3.565 8.31826 1 12.0003 1ZM6.50026 7V11.539C6.50052 12.4767 6.2232 13.3936 5.70326 14.174L3.50326 17.472L3.50026 17.482L3.50126 17.489L3.50526 17.495L3.51126 17.499L3.51826 17.5H20.4823L20.4893 17.499L20.4953 17.495L20.4993 17.489L20.5003 17.483L20.4973 17.473L18.2983 14.174C17.778 13.3937 17.5003 12.4769 17.5003 11.539V7C17.5003 4.636 15.1173 2.5 12.0003 2.5C8.88326 2.5 6.50026 4.636 6.50026 7ZM14.0003 19H10.0003C10.0003 19.5304 10.211 20.0391 10.586 20.4142C10.9611 20.7893 11.4698 21 12.0003 21C12.5307 21 13.0394 20.7893 13.4145 20.4142C13.7895 20.0391 14.0003 19.5304 14.0003 19Z" fill="white"/>
                    </svg>
                </li>
                <li onMouseOver={ () => setIsHovering(1)} onMouseOut={ () => setIsHovering(0)}>
                    <img src="https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg" alt="기본 프로필 이미지" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33159 5.16602C3.23276 5.1661 3.13618 5.19547 3.05404 5.25042C2.97189 5.30537 2.90787 5.38342 2.87007 5.47473C2.83226 5.56604 2.82236 5.66651 2.84161 5.76344C2.86087 5.86037 2.90842 5.94942 2.97826 6.01935L7.64492 10.686C7.73868 10.7796 7.86576 10.8322 7.99826 10.8322C8.13076 10.8322 8.25784 10.7796 8.35159 10.686L13.0183 6.01935C13.0881 5.94942 13.1356 5.86037 13.1549 5.76344C13.1742 5.66651 13.1643 5.56604 13.1264 5.47473C13.0886 5.38342 13.0246 5.30537 12.9425 5.25042C12.8603 5.19547 12.7638 5.1661 12.6649 5.16602H3.33159Z" fill="white"/>
                    </svg>
                    {
                        isHovering ? (
                            <ul className="depth2">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.233 2.76723C16.7417 2.27598 16.0754 2 15.3806 2C14.6858 2 14.0195 2.27598 13.5282 2.76723L4.26302 12.034C3.99283 12.304 3.80641 12.6463 3.72618 13.0198L3.01199 16.3523C2.99316 16.4398 2.99655 16.5307 3.02187 16.6165C3.04719 16.7024 3.09362 16.7806 3.15692 16.8439C3.22023 16.9072 3.29838 16.9536 3.38425 16.9789C3.47012 17.0042 3.56097 17.0076 3.64849 16.9888L6.98101 16.2746C7.35447 16.1944 7.69681 16.008 7.96683 15.7378L17.233 6.47157C17.7241 5.98027 18 5.31405 18 4.6194C18 3.92474 17.7241 3.25853 17.233 2.76723ZM14.2863 3.52481C14.5792 3.24776 14.9687 3.09592 15.3719 3.10157C15.7751 3.10722 16.1601 3.26992 16.4452 3.55507C16.7303 3.84021 16.8929 4.22532 16.8984 4.62849C16.904 5.03166 16.752 5.42109 16.4749 5.71398L15.9927 6.19618L13.8036 4.00754L14.2863 3.52481ZM13.0454 4.76513L15.2346 6.9543L7.20978 14.9807C7.0856 15.1049 6.9282 15.1904 6.75652 15.2272L4.23248 15.7683L4.77362 13.2448C4.81036 13.0731 4.89595 12.9157 5.02007 12.7916L13.0454 4.76513Z" fill="#B3B3B3"/>
                            </svg>
                            프로필 관리
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.6479 16.7476C15.1117 15.7783 16.1888 14.3261 16.6916 12.6441C17.1944 10.9621 17.0909 9.15693 16.3993 7.54336C15.7076 5.92979 14.4716 4.61012 12.9068 3.81438C11.3419 3.01864 9.54744 2.7973 7.83613 3.18895M13.6479 16.7476V13.8321M13.6479 16.7476H16.5826M5.33714 4.26602C3.87849 5.23888 2.80695 6.69222 2.30887 8.3733C1.81079 10.0544 1.91767 11.8569 2.61093 13.4673C3.30419 15.0778 4.53997 16.3943 6.10338 17.1879C7.66678 17.9816 9.45891 18.2022 11.1681 17.8114M5.33714 4.26602V7.16817M5.33714 4.26602H2.42166" stroke="#B3B3B3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            프로필 이전
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.4305 5.96154C13.2892 7.86791 11.844 9.42308 10.2575 9.42308C8.67093 9.42308 7.22321 7.86827 7.08439 5.96154C6.94016 3.97837 8.34641 2.5 10.2575 2.5C12.1685 2.5 13.5748 4.01442 13.4305 5.96154Z" stroke="#B3B3B3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.2552 11.7305C7.11818 11.7305 3.93428 13.4612 3.3451 16.7281C3.27407 17.1218 3.4969 17.4997 3.90904 17.4997H16.6013C17.0138 17.4997 17.2367 17.1218 17.1657 16.7281C16.5761 13.4612 13.3922 11.7305 10.2552 11.7305Z" stroke="#B3B3B3" strokeWidth="1.2" strokeMiterlimit="10"/>
                            </svg>
                            계정
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.9375 14.0625C10.9375 14.2479 10.8825 14.4292 10.7795 14.5833C10.6765 14.7375 10.5301 14.8577 10.3588 14.9286C10.1875 14.9996 9.99896 15.0182 9.81711 14.982C9.63525 14.9458 9.4682 14.8565 9.33709 14.7254C9.20598 14.5943 9.11669 14.4273 9.08052 14.2454C9.04434 14.0635 9.06291 13.875 9.13387 13.7037C9.20482 13.5324 9.32499 13.386 9.47916 13.283C9.63333 13.18 9.81458 13.125 10 13.125C10.2486 13.125 10.4871 13.2238 10.6629 13.3996C10.8387 13.5754 10.9375 13.8139 10.9375 14.0625ZM10 5.625C8.27657 5.625 6.875 6.88672 6.875 8.4375V8.75C6.875 8.91576 6.94085 9.07473 7.05806 9.19194C7.17527 9.30915 7.33424 9.375 7.5 9.375C7.66576 9.375 7.82473 9.30915 7.94195 9.19194C8.05916 9.07473 8.125 8.91576 8.125 8.75V8.4375C8.125 7.57812 8.96641 6.875 10 6.875C11.0336 6.875 11.875 7.57812 11.875 8.4375C11.875 9.29688 11.0336 10 10 10C9.83424 10 9.67527 10.0658 9.55806 10.1831C9.44085 10.3003 9.375 10.4592 9.375 10.625V11.25C9.375 11.4158 9.44085 11.5747 9.55806 11.6919C9.67527 11.8092 9.83424 11.875 10 11.875C10.1658 11.875 10.3247 11.8092 10.4419 11.6919C10.5592 11.5747 10.625 11.4158 10.625 11.25V11.1937C12.05 10.932 13.125 9.79531 13.125 8.4375C13.125 6.88672 11.7234 5.625 10 5.625ZM18.125 10C18.125 11.607 17.6485 13.1779 16.7557 14.514C15.8629 15.8502 14.594 16.8916 13.1093 17.5065C11.6247 18.1215 9.99099 18.2824 8.41489 17.9689C6.8388 17.6554 5.39106 16.8815 4.25476 15.7452C3.11846 14.6089 2.34463 13.1612 2.03112 11.5851C1.71762 10.009 1.87852 8.37535 2.49348 6.8907C3.10844 5.40605 4.14985 4.1371 5.486 3.24431C6.82214 2.35152 8.39303 1.875 10 1.875C12.1542 1.87727 14.2195 2.73403 15.7427 4.25727C17.266 5.78051 18.1227 7.84581 18.125 10ZM16.875 10C16.875 8.64025 16.4718 7.31104 15.7164 6.18045C14.9609 5.04987 13.8872 4.16868 12.631 3.64833C11.3747 3.12798 9.99238 2.99183 8.65876 3.2571C7.32514 3.52237 6.10013 4.17715 5.13864 5.13864C4.17716 6.10013 3.52238 7.32513 3.2571 8.65875C2.99183 9.99237 3.12798 11.3747 3.64833 12.6309C4.16868 13.8872 5.04987 14.9609 6.18046 15.7164C7.31105 16.4718 8.64026 16.875 10 16.875C11.8227 16.8729 13.5702 16.1479 14.8591 14.8591C16.1479 13.5702 16.8729 11.8227 16.875 10Z" fill="#B3B3B3"/>
                            </svg>
                            고객 센터
                        </li>
                        <li>
                            넷플릭스에서 로그아웃
                        </li>
                    </ul>
                        ) : ('')
                    }
                </li>
            </ul>
        </div>
    );
};

export default Header;