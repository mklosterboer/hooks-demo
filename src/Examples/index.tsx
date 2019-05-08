import { Example1 } from './Example1';
import { Example2 } from './Example2';
import { Example3 } from './Example3';
import { Example4 } from './Example4';
import { Example5 } from './Example5';

export const Examples: {title: string, component: React.FC}[] = [
    {title: "Basic useState", component: Example1},
    {title: "Multiple useState", component: Example2},
    {title: "Basic useEffect", component: Example3},
    {title: "Fetch Data", component: Example4},
    {title: "Custom Fetch Data", component: Example5},
];