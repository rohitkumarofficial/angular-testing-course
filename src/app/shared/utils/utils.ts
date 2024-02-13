export const pluck = (elements : any[], field:string) => {
    return elements.map(el => el[field])
}