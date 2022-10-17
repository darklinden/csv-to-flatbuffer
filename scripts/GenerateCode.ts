import path = require("path");
import { execSync } from "child_process";

import { paths } from "./Paths";
import { walkDirSync } from "./WalkDirSync";


export function generate_code(target_folder: string, language_sign: string) {
    console.log(`生成 ${language_sign} 代码`);

    const fbs_path_list = walkDirSync(paths.fbs, '.fbs');
    for (const file_path of fbs_path_list) {
        const full_path = path.join(paths.fbs, file_path);
        const command = `${paths.flatc} --${language_sign} -o ${target_folder} ${full_path} --gen-onefile`;
        // console.log(command);
        execSync(command);
    }
}