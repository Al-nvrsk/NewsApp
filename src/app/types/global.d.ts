declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGAElement>>
    export default SVG
}

declare module "\*.png" {
    const content: string;
    export default content;
  }

  declare const __IS_DEV__:boolean
