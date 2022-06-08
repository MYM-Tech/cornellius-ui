declare module 'vite-svg-loader' {
    import { Plugin } from 'vite';

    // eslint-disable-next-line @typescript-eslint/ban-types
    function svgLoader(options?: { svgoConfig?: Object; svgo?: boolean }): Plugin;
    export default svgLoader;
}

declare module '*.svg?component' {
    import { FunctionalComponent, SVGAttributes } from 'vue';

    const src: FunctionalComponent<SVGAttributes>;
    export default src;
}

declare module '*.svg?url' {
    const src: string;
    export default src;
}

declare module '*.svg?raw' {
    const src: string;
    export default src;
}
