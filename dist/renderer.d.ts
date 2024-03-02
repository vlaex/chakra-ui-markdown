import { type MarkdownToJSX } from "markdown-to-jsx";
declare type MarkdownOverrides = Required<Pick<MarkdownToJSX.Overrides, keyof MarkdownToJSX.Overrides>>;
export declare const defaults: MarkdownOverrides;
declare function ChakraUIRenderer(theme?: MarkdownOverrides, merge?: boolean): Partial<MarkdownOverrides>;
export { ChakraUIRenderer };
