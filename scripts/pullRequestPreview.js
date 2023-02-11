import { execSync} from 'child_process';

console.log('[DEPLOY PREVIEW] Start!!!')
const command = "yarn deploy:dev"
const output = execSync(command, {encoding: "utf8"});
const outputLines = output.split("/n")
const DEPLOY_URL = outputLines[outputLines.length -1]
console.log('[DEPLOY PREVIEW] Env!!!')

console.log(DEPLOY_URL)
console.log(output)