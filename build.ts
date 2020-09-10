import { create_dir, write_file } from "https://denopkg.com/olaven/dio";

/**
 * Building something wiht the Deno Compiler that Node
 * understands as a library.
 */

const [transpilationError, transpiled] = await Deno.bundle("./mod.ts");

//FIXME: generates declaration, but it has to be manually cleaned up..
const [declarationError, declaration] = await Deno.bundle(
  "./mod.ts",
  undefined,
  {
    declaration: true,
    emitDeclarationOnly: true,
    declarationMap: true,
  }
);

if (transpilationError || declarationError) {
  console.info("Error building Kall.");
  console.error("Transpilation Error: ", transpilationError);
  console.error("Declaration Error: ", declarationError);
} else {
  await create_dir("./build");
  write_file("./build/index.js", transpiled);
  write_file("./build/index.d.ts", declaration);

  console.log("Built Kall :-D");
}
