import { generate_bytes } from "./GenerateBytes";
import { generate_code } from "./GenerateCode";
import { generate_fbs } from "./GenerateFbs";
import { generate_json } from "./GenerateJson";
import { Initialize } from "./Initialize";
import { paths } from "./Paths";
import { test_bytes } from "./TestBytes";

Initialize();

console.log('========================================');
console.log('生成 fbs 文件');
console.log('----------------------------------------');
const obj = generate_fbs();
// console.log(obj);
console.log('========================================\n');

console.log('========================================');
console.log('生成代码');
console.log('----------------------------------------');
generate_code(paths.ts, 'ts');
generate_code(paths.csharp, 'csharp');
console.log('========================================\n');

console.log('========================================');
console.log('生成json');
console.log('----------------------------------------');
const fbs_to_json = generate_json(obj);
console.log('========================================\n');

console.log('========================================');
console.log('生成二进制数据');
console.log('----------------------------------------');
const bytes_path_list = generate_bytes(fbs_to_json);
console.log('========================================\n');

console.log('========================================');
console.log('校验二进制数据');
console.log('----------------------------------------');
test_bytes(bytes_path_list);
console.log('========================================\n');

console.log('');
console.log('完成');