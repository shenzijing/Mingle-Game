import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { marked } from 'marked';
import { SiteConfig } from '@/types/site';

// 读取YAML配置文件
export function getSiteConfig(): SiteConfig {
  const configPath = path.join(process.cwd(), 'config/site.yml');
  const configFile = fs.readFileSync(configPath, 'utf8');
  return yaml.parse(configFile);
}

// 读取Markdown内容
export function getMarkdownContent(name: string): string {
  const mdPath = path.join(process.cwd(), `content/${name}.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  return marked(mdContent);
}