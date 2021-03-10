type mapFnCbType = (obj: Object, i: number) => void;

const fillArrayWithObjects = (obj: Object, count: number = 1, mapFnCb: mapFnCbType ) => (
    new Array(count).fill(count).map((a, i) => ( 
        typeof mapFnCb === 'function'
            ? mapFnCb(obj, i)
            : obj
    ))
);

export { fillArrayWithObjects }