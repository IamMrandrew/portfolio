type textTypes = "text" | "mention" | string;

type Link = {
  url: string;
};

export interface Text {
  type: textTypes;
  text?: {
    content: string;
    link: Link | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  // eslint-disable-next-line camelcase
  plain_text: string;
  href?: string;
}
