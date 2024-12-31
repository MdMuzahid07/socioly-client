/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'

const Container = React.memo(({ children, style }: { children: ReactNode, style?: any }) => {
    return (
        <div className={`max-w-6xl mx-auto bg-transparent ${style}`} >{children}</div>
    )
});


export default Container;

Container.displayName = "Container";
