import { Strings, strings } from "./shared";
type SharedType = { shared: boolean, strings: Strings }

console.log(strings.webString);
export const sharedVar : SharedType = { shared: true, strings }
export { SharedType }
