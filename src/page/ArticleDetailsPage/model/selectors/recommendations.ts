/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlRecommendationsIsloading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
