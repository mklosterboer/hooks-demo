export type example =  {
    title: string,
    component: (props: exampleProps) => JSX.Element,
    description: JSX.Element,
}

export interface exampleProps {
    description: JSX.Element,
}