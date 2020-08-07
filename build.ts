import { create_dir, write_file } from "https://raw.githubusercontent.com/olaven/markblog/master/source/file_io.ts";

/**
 * The attept here is to use Deno's built in compiler
 * to build something that Node can understand as a library.
 */


//TODO: bulid `.d.ts` for node projects: https://github.com/denoland/deno/issues/3385

const [diagnostics, code] = await Deno.bundle("./mod.ts");

if (diagnostics) {

    console.info("Error building Kall.");
    console.error("Diagnostics: ", diagnostics);
} else {

    await create_dir("./build");
    write_file("./build/index.js", code);

    console.log("Built Kall :-D");
}
