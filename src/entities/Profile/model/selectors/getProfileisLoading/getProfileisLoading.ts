import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileisLoading = (state: StateSchema) => state?.profile?.isLoading;
