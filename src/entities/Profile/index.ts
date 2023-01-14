export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileErrpr';
export { getProfileisLoading } from './model/selectors/getProfileisLoading/getProfileisLoading';
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { updateProfileData } from './model/service/updateProfileData/updateProfileData';
export { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';
export { profileActions, profileReducer } from './model/slice/profileSlice';

export { ProfileSchema, Profile } from './model/types/profile';
