function stringify(obj : Record<string,any>, replacer:((this:any, key: string, value: any) => any) | undefined, spaces: string | number | undefined, cycleReplacer:any) {
    return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer:any, cycleReplacer:any) {
    const stack : any[] = [], keys: any[] = []

    if (cycleReplacer == null) cycleReplacer = function(key:string, value:any) {
        if (stack[0] === value) return "[Circular ~]"
        return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
    }

    return function getSerialize(this: typeof serializer ,key:string, value:any) {
        if (stack.length > 0) {
            const thisPos = stack.indexOf(this)
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
            if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
        }
        else stack.push(value)

        return replacer == null ? value : replacer.call(this, key, value)
    }
}


export const jsonHelper =  (obj:any, replacer:any, spaces:any, cycleReplacer:any) =>
    JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);