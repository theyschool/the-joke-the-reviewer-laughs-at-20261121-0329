import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, aimed at the moment every reviewer knows: the agent states a
// made-up API with total certainty, and the human ends up doing the work
// of making the invention real. Tightened so the only wasted afternoon in
// it is the narrator's — every filler word came out, and the last three
// words carry the punchline.
const joke =
  "The agent invented an API so confidently that I stopped correcting it, spent my afternoon building that API, and now its hallucinated code runs in production.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
