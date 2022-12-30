documentReady( () => {
    console.clear()

    const conn = webSocketConnection()
    if ( ! conn ) return

    window["WCConn"] = conn

    submitChangeChatroom()
    submitSendMessage()

} );

const submitHandler = ( e:SubmitEvent, ID:string, errMessage:string, successHandler:Function ) => {
    e.preventDefault()

    const newInput = <HTMLInputElement>document.getElementById( ID )
    if ( ! newInput ) return

    const newText = newInput.value
    if ( ! newText ) {
        alert( errMessage );
        return
    }

    successHandler( newText )
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

const successChangeChatroom = ( newChatroomName:string ) => {
    console.log( "change chatroom" );
    console.log(newChatroomName);
}

const successSendMessage = ( newMessage:string ) => {
    console.log( "send message" );
    console.log(newMessage);
    
    const conn = window["WCConn"]
    conn.send( newMessage )
}

const webSocketConnection = () => {
    if ( window["WebSocket"] ) {
        console.log("Supports WebSocket");

        return connection()
    }

    alert( "Your browsert doesn't support WebSocket" )
    return false
}

const connection = () => {
    const conn = new WebSocket( "ws://" + document.location.host + "/ws" )
    return conn
}