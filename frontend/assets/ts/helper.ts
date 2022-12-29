const documentReady = ( fn:Function ) => {
    document.addEventListener("DOMContentLoaded", function(event) { 
        fn()
    });
}