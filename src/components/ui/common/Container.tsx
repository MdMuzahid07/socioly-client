/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'

const Container = React.memo(({ children, style }: { children: ReactNode, style?: any }) => {
    return (
        <div className={`max-w-6xl mx-auto bg-transparent ${style} sm:px-3 lg:px-0`} >{children}</div>
    )
});


export default Container;

Container.displayName = "Container";
