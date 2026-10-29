import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

for (const file of ['index.html', 'privacy.html']) {
  test(`${file} has a main landmark, description, and existing favicon`, async () => {
    const html = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    assert.match(html, /<main(?:\s[^>]*)?>[\s\S]*<\/main>/i);
    assert.match(html, /<meta\s+name="description"\s+content="[^"]+"\s*\/?\s*>/i);
    const icon = html.match(/<link\s+rel="icon"\s+href="([^"]+)"/i);
    assert.ok(icon, 'a favicon is declared');
    assert.ok((await readFile(new URL(`../${icon[1]}`, import.meta.url))).length > 0);
  });
}
