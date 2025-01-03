import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { marked } from 'marked';
import { SiteConfig } from '@/types/site';

// Read YAML config file
export function getSiteConfig(): SiteConfig {
  const configPath = path.join(process.cwd(), 'config/site.yml');
  const configFile = fs.readFileSync(configPath, 'utf8');
  return yaml.parse(configFile);
}

// Read and parse Markdown content
export async function getMarkdownContent(name: string): Promise<string> {
  const mdPath = path.join(process.cwd(), `content/${name}.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  return await marked(mdContent);
}