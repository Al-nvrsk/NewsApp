import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        byildLocales: '',
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(buildCssLoader(true));
    config!.resolve!.alias = { '@': path.resolve(__dirname, '..', '..', 'src') };

    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule) => {
            if (/svg/.test((rule as RuleSetRule).test as string)) {
                return { ...(rule as object), exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
