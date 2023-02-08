import { execSync} from 'child_process';

console.log('[DEPLOY PREVIEW] Start!!!')
const command = "yarn deploy:dev"
const output = execSync(command, {encoding: "utf8"});
console.log('[DEPLOY PREVIEW] Env!!!')

console.log(output)