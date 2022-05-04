

export function mergeValues(defaultValue: {[key: string]: any}, newValue: {[key: string]: any}) {
    Object.keys(newValue).map((key, index) => {
        defaultValue[key] = newValue[key]  
    })
    return defaultValue
    
}