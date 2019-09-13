import { example } from "./models";

import { BasicUseStateExample } from './BasicUseState';
import { MultiUseStateExample } from './MultiUseState';
import { BasicUseEffectExample } from './BasicUseEffect';
import { FetchDataExample } from './FetchData/FetchData';
import { CustomFetchDataExample } from './CustomFetchData';
import { BasicUseReducerExample } from './BasicUseReducer';

export const Examples: example[] = [
    BasicUseStateExample,
    MultiUseStateExample,
    BasicUseEffectExample,
    FetchDataExample,
    CustomFetchDataExample,
    BasicUseReducerExample
];