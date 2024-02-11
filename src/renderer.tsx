import deepmerge from "deepmerge";
import { Components } from "react-markdown";
import {
  Code,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { chakra } from "@chakra-ui/system";

type GetCoreProps = {
  children?: React.ReactNode;
  "data-sourcepos"?: any;
};

function getCoreProps(props: GetCoreProps): any {
  return props["data-sourcepos"]
    ? { "data-sourcepos": props["data-sourcepos"] }
    : {};
}

interface Defaults extends Components {
  /**
   * @deprecated Use `h1, h2, h3, h4, h5, h6` instead.
   */
  heading?: Components["h1"];
}

export const defaults: Defaults = {
  p: (props) => {
    const { children } = props;
    return <Text mb={2}>{children}</Text>;
  },
  em: (props) => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: (props) => {
    const { children } = props;
    return (
      <Code as="blockquote" p={2}>
        {children}
      </Code>
    );
  },
  code: props => <Code>{props.children}</Code>,
  del: (props) => {
    const { children } = props;
    return <Text as="del">{children}</Text>;
  },
  hr: Divider,
  a: Link,
  img: Image,
  text: (props) => {
    const { children } = props;
    return <Text as="span">{children}</Text>;
  },
  ul: (props) => {
    const children = props.children as (React.ReactElement | string)[];

    return (
      <UnorderedList mt={1} mb={2} pl={2}>
        {children
          .map((node, index) => (
            typeof node !== "string" && <ListItem key={index}>{node?.props?.children}</ListItem>
          ))}
      </UnorderedList>
    );
  },
  ol: (props) => {
    const children = props.children as (React.ReactElement | string)[];

    return (
      <OrderedList mt={1} mb={2} pl={2}>
        {children
          .map((node, index) => (
            typeof node !== "string" && <ListItem key={index}>{node?.props?.children}</ListItem>
          ))}
      </OrderedList>
    );
  },
  h1: props => <Heading as="h2" size="lg" my={4}>{props.children}</Heading>,
  h2: props => <Heading as="h3" size="md" my={4}>{props.children}</Heading>,
  h3: props => <Heading as="h4" size="sm" my={4}>{props.children}</Heading>,
  h4: props => <Heading as="h4" size="sm" my={4}>{props.children}</Heading>,
  h5: props => <Heading as="h5" size="sm" my={4}>{props.children}</Heading>,
  h6: props => <Heading as="h6" size="sm" my={4}>{props.children}</Heading>,
  pre: (props) => {
    const { children } = props;
    return <chakra.pre {...getCoreProps(props)}>{children}</chakra.pre>;
  },
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: (props) => <Tr>{props.children}</Tr>,
  td: (props) => <Td>{props.children}</Td>,
  th: (props) => <Th>{props.children}</Th>,
};

function ChakraUIRenderer(theme?: Defaults, merge = true): Components {
  const elements = {
    p: defaults.p,
    em: defaults.em,
    blockquote: defaults.blockquote,
    code: defaults.code,
    del: defaults.del,
    hr: defaults.hr,
    a: defaults.a,
    img: defaults.img,
    text: defaults.text,
    ul: defaults.ul,
    ol: defaults.ol,
    li: defaults.li,
    h1: defaults.h1,
    h2: defaults.h2,
    h3: defaults.h3,
    h4: defaults.h4,
    h5: defaults.h5,
    h6: defaults.h6,
    pre: defaults.pre,
    table: defaults.table,
    thead: defaults.thead,
    tbody: defaults.tbody,
    tr: defaults.tr,
    td: defaults.td,
    th: defaults.th,
  };

  if (theme && merge) {
    return deepmerge(elements, theme);
  }

  return elements;
}

export { ChakraUIRenderer };