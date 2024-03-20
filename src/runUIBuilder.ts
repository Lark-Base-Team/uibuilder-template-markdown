//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.markdown(`# A demo of \`uiBuilder.markdown\`
  如果你想了解某些语法元素的更多信息，请参阅更详细的 [基本语法](https://markdown.com.cn/basic-syntax/) 和 [扩展语法](https://markdown.com.cn/extended-syntax/)
  ## Markdown 语法速查表
  | 元素 | Markdown语法 |
  | --- | --- |
  | 标题（Heading） | \`# H1\` \`## H2\` \`### H3\`|
  | 粗体（Bold） | \`**bold text**\` |
  | 斜体（Italic）） | \`*italicized text*\` |
  | 引用块（Blockquote） | \`> blockquote\` |
  | 有序列表（Ordered List） | \`1. First item\` |
  | 无序列表（Unordered List） | \`- First item\` |
  | 代码（Code） | \`\` \`code\` \`\` |
  | 分隔线（Horizontal Rule） | \`---\` |
  | 链接（Link） | \`[title](https://www.example.com)\` |
  | 图片（Image） | \`![alt text](image.jpg)\` |
  | 表格（Table） | ✅ |
  | 删除线（Strikethrough） | \`~~The world is flat.~~\` |
  | 任务列表（Task List） | \`- [x] Write the press release\` |
  | 代码块（Fenced Code Block） | ❌（暂不支持） |
`);
}