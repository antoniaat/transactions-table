const getClassName = (classNamesMap: { [key: string]: boolean } ) =>
  Object.keys(classNamesMap)
    .filter((className) => classNamesMap[className])
    .join(" ")
    .trim();

export { getClassName };
