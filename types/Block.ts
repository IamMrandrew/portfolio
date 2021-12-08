enum BlockType {
  paragraph = "paragraph",
  heading_1 = "heading_1",
  heading_2 = "heading_2",
  heading_3 = "heading_3",
  bulleted_list_item = "bulleted_list_item",
  numbered_list_item = "numbered_list_item",
  to_do = "to_do",
  toggle = "toggle",
  code = "code",
  child_page = "child_page",
  child_database = "child_database",
  embed = "embed",
  image = "image",
  video = "video",
  file = "file",
  pdf = "pdf",
  bookmark = "bookmark",
  callout = "callout",
  quote = "quote",
  equation = "equation",
  divider = "divider",
  table_of_contents = "table_of_contents",
  column = "column",
  column_list = "column_list",
  link_preview = "link_preview",
  synced_block = "synced_block",
  template = "template",
  link_to_page = "link_to_page",
  unsupported = "unsupported",
}

export interface Block {
  id?: string;
  type: BlockType;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  archived: boolean;
  // Block Types Object
  paragraph?: any;
  heading_1?: any;
  heading_2?: any;
  heading_3?: any;
  bulleted_list_item?: any;
  numbered_list_item?: any;
  to_do: any;
  toggle?: any;
  code?: any;
  child_page?: any;
  child_database?: any;
  embed?: any;
  image?: any;
  video?: any;
  file?: any;
  pdf?: any;
  bookmark?: any;
  callout?: any;
  quote?: any;
  equation?: any;
  divider?: any;
  table_of_contents?: any;
  column?: any;
  column_list?: any;
  link_preview?: any;
  synced_block?: any;
  template?: any;
  link_to_page?: any;
  unsupported?: any;
}
