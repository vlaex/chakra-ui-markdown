import { Components } from "react-markdown";
interface Defaults extends Components {
    /**
     * @deprecated Use `h1, h2, h3, h4, h5, h6` instead.
     */
    heading?: Components["h1"];
}
export declare const defaults: Defaults;
declare function ChakraUIRenderer(theme?: Defaults, merge?: boolean): Components;
export { ChakraUIRenderer };
