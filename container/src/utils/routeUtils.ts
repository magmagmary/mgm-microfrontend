export function trimTrailingSlash(s: string) {
    return s !== "/" && s.endsWith("/") ? s.slice(0, -1) : s;
  }
  
  export function addBase(base: string, childPath: string) {
    const p = childPath.startsWith("/") ? childPath : `/${childPath}`;
    return `${trimTrailingSlash(base)}${p}`;
  }
  