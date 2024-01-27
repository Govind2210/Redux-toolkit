"use client"

//provider help to wrap the  redux toolkit and next js so we can use redux easily.

const { Provider } = require("react-redux");

// steps:-

export function Providers({children}){
    return <Provider>
        {children}
    </Provider>
}

// after making a function we have add Providers to layout and pass the childern from layout to provider