import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {newProject} from "../src/core.js";
test("bản sao bắt đầu không có ảnh tham chiếu và có bộ nhớ riêng",()=>{
 const p=newProject("Kiểm thử");
 assert.equal(p.data.edit,undefined);
 assert.equal(JSON.stringify(p).includes("data:image/"),false);
 const app=readFileSync(new URL("../src/app.js",import.meta.url),"utf8");
 const chat=readFileSync(new URL("../src/mo-chat.js",import.meta.url),"utf8");
 const sw=readFileSync(new URL("../sw.js",import.meta.url),"utf8");
 assert.match(app,/hg-studio-ai-projects-v1/);
 assert.match(app,/hg-studio-ai-active-v1/);
 assert.match(app,/val\("reference","no"\)/);
 assert.match(chat,/hg-studio-ai-secretary-chat-v2/);
 assert.doesNotMatch(sw,/secretary-avatar\.jpg\.png/);
});