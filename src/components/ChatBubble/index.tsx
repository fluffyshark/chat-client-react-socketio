import { Avatar, Tooltip, Comment } from "antd";
import moment from "moment";
import React, { FunctionComponent } from "react";
import { Message } from "../model/Message";

interface ChatBubbleProps {
    item: Message,
    isOwner: boolean
}


const ChatBubble: FunctionComponent<ChatBubbleProps> = ({item:{ userName, time, message}, isOwner}) => {
    return (

        <Comment
            className="chat-bubble"
            data-isowner={isOwner}
            author={userName}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={userName} />}
            content={
                <p>
                    {message}
                </p>
            }
            datetime={
                <Tooltip title={moment(time).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(time).fromNow()}</span>
                </Tooltip>
            }
       /> 
    );
}

export default ChatBubble












 