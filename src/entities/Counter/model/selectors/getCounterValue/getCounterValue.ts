import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useCouterValue, getCounterValue] = buildSelector((state: StateSchema) => state.counter.value);
