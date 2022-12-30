import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(buildCssLoader(true));

    // For svg
    // if (config.module?.rules) {
    //     config.module.rules = config?.module?.rules?.map((rule) => {
    //         if (/svg/.test(rule.test)) {
    //             return { ...rule, exclude: /\.svg$/i };
    //         }
    //         return rule;
    //     });
    // }
    // config.module?.rules?.push({
    //     test: /\.svg&/,
    //     use: ['@svgr/webpack'],
    // });

    return config;
};
