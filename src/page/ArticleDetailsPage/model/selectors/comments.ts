import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsloading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
