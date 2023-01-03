import { CounterShema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterShema;
    user: UserSchema;
}
