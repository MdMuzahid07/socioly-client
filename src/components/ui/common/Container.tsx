/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

const Container = React.memo(
  ({
    children,
    style,
    spaceX,
  }: {
    children: ReactNode;
    style?: any;
    spaceX?: boolean;
  }) => {
    return (
      <div
        className={`mx-auto max-w-6xl bg-transparent ${style} ${spaceX ? "sm:px-3 lg:px-0" : ""}`}
      >
        {children}
      </div>
    );
  },
);

export default Container;

Container.displayName = "Container";
