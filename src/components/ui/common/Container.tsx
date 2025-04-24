/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

const Container = React.memo(({ children, style }: { children: ReactNode; style?: any }) => {
  return (
    <div className={`mx-auto max-w-6xl bg-transparent ${style} sm:px-3 lg:px-0`}>{children}</div>
  );
});

export default Container;

Container.displayName = "Container";
