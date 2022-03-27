import {useContext, useState, useRef, useEffect} from 'react'
import { DataContext } from '../providers/DataProvider'
import { MessageArea } from '../styles/global'

const Message: React.FC = ()=>{
    const { modal, showModal } = useContext(DataContext);
    const modalWrapper = useRef<HTMLDivElement>(null);
    const btnClose = useRef<HTMLButtonElement>(null);

    useEffect(()=>{
        if(modal == true)
        {
            document.addEventListener('click', handleClickOutside, false)
        }
    }, [modal])

    const handleClickOutside = (e: any) => {
        const portifolioWrapperRef = modalWrapper.current;
        const button = btnClose.current;

        if(portifolioWrapperRef != null && button != null)
        {
            if(!portifolioWrapperRef.contains(e.target) || button.contains(e.target))
            {
                showModal(false)
                document.removeEventListener('click', handleClickOutside, false);
            }
        }
    }

    const getModal = ()=>{
        if(modal)
        {
            return(
                <>
                    <MessageArea>
                        <div className="message-wrapper" ref={modalWrapper}>
                            <h1>Oh Sorry!</h1>
                            <span>Unfortunately, we were unable to locate your city. Please check that you have typed the city name correctly.</span>
                            <div className="btn-area">
                                <button type='button' ref={btnClose} onClick={()=>showModal(false)}>I Understood</button>
                            </div>
                        </div>
                    </MessageArea>
                </>
            )
        }
    }
    return(
        <>
            {getModal()}
        </>
    )
}

export default Message