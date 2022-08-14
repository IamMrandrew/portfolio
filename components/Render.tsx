import React from "react";
import { Block } from "../types/Block";
import Heading1 from "./Blocks/Heading1";
import Heading2 from "./Blocks/Heading2";
import Heading3 from "./Blocks/Heading3";
import Paragraph from "./Blocks/Paragraph";
import BulletedList from "./Blocks/BulletedList";
import NumberedList from "./Blocks/NumberedList";
import Quote from "./Blocks/Quote";
import Image from "./Blocks/Image";
import Code from "./Blocks/Code";
import Callout from "./Blocks/Callout";
import Video from "./Blocks/Video";

type Props = {
  blocks: any;
};

const Render: React.FC<Props> = ({ blocks }) => {
  return blocks.map((block: Block) => {
    switch (block.type) {
      case "heading_1":
        return <Heading1 key={block.id} block={block} />;
      case "heading_2":
        return <Heading2 key={block.id} block={block} />;
      case "heading_3":
        return <Heading3 key={block.id} block={block} />;
      case "paragraph":
        return <Paragraph key={block.id} block={block} />;
      case "bulleted_list_item":
        return <BulletedList key={block.id} block={block} />;
      case "numbered_list_item":
        return <NumberedList key={block.id} block={block} />;
      case "image":
        return <Image key={block.id} block={block} />;
      case "code":
        return <Code key={block.id} block={block} />;
      case "quote":
        return <Quote key={block.id} block={block} />;
      case "callout":
        return <Callout key={block.id} block={block} />;
      case "video":
        return <Video key={block.id} block={block} />;
    }
  });
};

export default Render;
