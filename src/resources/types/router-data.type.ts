export type RouterDataType = {
    path: string,
    title?: string,
    private: boolean,
    rol: string[],
    Element: () => JSX.Element,
    routerAttributes?: {},
    children?: RouterDataType[]
}
