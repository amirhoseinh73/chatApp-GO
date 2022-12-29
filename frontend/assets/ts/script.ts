documentReady( () => {
    console.clear()

    submitChangeChatroom()
    submitSendMessage()
} );

const submitHandler = ( e:SubmitEvent, ID:string, errMessage:string, successHandler:Function ) => {
    e.preventDefault()

    const newChatroom = <HTMLInputElement>document.getElementById( ID )
    if ( ! newChatroom ) return

    const newChatroomName = newChatroom.value
    if ( ! newChatroomName ) {
        alert( errMessage );
        return
    }

    successHandler()
}

const submitChangeChatroom = () => {
    const form = document.getElementById( "changeChatroom" )
    if ( ! form ) return

    form.addEventListener( "submit", ( e ) => {
        submitHandler( e, "changeChatroomInput", "Please type a valid chatroom name", successChangeChatroom )
    } )
}

const submitSendMessage = () => {
    const form = document.getElementById( "sendMessages" )
    if ( ! form ) return

    form.addEventListener( "submit", ( e ) => {
        submitHandler( e, "writeMessage", "Please type a message", successSendMessage )
    } )
}

const successChangeChatroom = () => {
    console.log( "change chatroom" );
}

const successSendMessage = () => {
    console.log( "send message" );
}