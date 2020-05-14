import React from 'react';
import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/Dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

   //Элементы, которые достаются из пропсов
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}

export default DialogsContainer;