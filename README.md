
# Chakra UI Markdown

**Chakra UI Markdown** uses markdown-to-jsx and Chakra UI to help you render markdown text with Chakra UI components.

This package is an initial fork of [this](https://www.npmjs.com/package/chakra-ui-markdown-renderer) library.

React Markdown has been replaced by markdown-to-jsx due to the huge size of the react-markdown package.

### Installation

```
# with npm
npm i chakra-ui-markdown

# with yarn
yarn add chakra-ui-markdown
```

### Usage

```js
import { useMemo } from "react";
import ReactMarkdown from "markdown-to-jsx";
import { ChakraUIRenderer } from "chakra-ui-markdown";

export const ExampleMarkdownComponent = (props: { children: string }) => {
  const { children } = props;

  const renderer = useMemo(() => ChakraUIRenderer(), []);

  return (
    <ReactMarkdown 
      options={{ 
        forceBlock: true,
        overrides: renderer
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
```