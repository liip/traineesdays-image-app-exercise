import highlightjs from "highlight.js";
// @ts-ignore
import hljs_svelte from "highlightjs-svelte";

hljs_svelte(highlightjs);
highlightjs.configure({ ignoreUnescapedHTML: true, languages: ["svelte"] });

export const hljs = highlightjs;
