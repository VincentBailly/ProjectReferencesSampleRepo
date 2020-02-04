import { Strings, strings } from "./shared";
type SharedType = { shared: boolean, strings: Strings }

export const sharedVar : SharedType = { shared: true, strings }
export { SharedType }
