import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSetting';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
