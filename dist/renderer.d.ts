import { type MarkdownToJSX } from "markdown-to-jsx";
declare type MarkdownOverrides = Required<Pick<MarkdownToJSX.Overrides, keyof MarkdownToJSX.Overrides>>;
export declare const defaults: MarkdownOverrides;
declare function ChakraUIRenderer(theme?: MarkdownOverrides, merge?: boolean): MarkdownToJSX.Overrides;
export { ChakraUIRenderer };
