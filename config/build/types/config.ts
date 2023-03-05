export type BuildMode = 'production' | 'development';

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    byildLocales: string
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}
