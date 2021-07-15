
/**
 * clear Empty Element Of Object
 * @param params anyObject
 * @return
 */
const clearEmptyOfObject = (params: {[keys: string]: any}) => {
  const handleObj = { ...params };
  Object.keys(params).forEach(key => {
    const element = params[key];
    if (typeof element !== 'number' && (!element || !element?.length)) {
      delete handleObj[key];
    }
  });
  return handleObj;
};

export default clearEmptyOfObject;
