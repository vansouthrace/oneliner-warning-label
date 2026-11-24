import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "WARNING: Contains one (1) human. May malfunction without coffee, cry at dog videos, and insist \"I'm fine\" when definitely not fine.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
