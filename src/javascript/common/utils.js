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

