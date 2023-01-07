declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGAElement>>;
    export default SVG;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

declare type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
