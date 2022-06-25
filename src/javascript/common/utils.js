export function splitByComma(arrayWithComma)
{
    return arrayWithComma.split(',');
}

export function convertToCamelCase(input)
{
    return input
    .replace(/\s(.)/g, function(a) {
        return a.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function(b) {
        return b.toLowerCase();
    });
}

/**
 * Just a simple random number gen
 */
export function generateUUID(){
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      ); 
}

