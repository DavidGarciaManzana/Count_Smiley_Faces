let countSmileyFaces = (arr: string[]): number => {
    let i = 0;
    arr.forEach((item) => {
        if ((item.includes(':') || item.includes(';')) && (item.includes('D') || item.includes(')'))) {
            if (item.length == 2) { i++ }
            else if ((item.length == 3) && ((item[1] != '-') && (item[1] != '~'))) {
                i++
            }
        }
    });
    return i
}
// console.log(countSmileyFaces([':D', ':~)', ';~D', ':)', ':)', ':(', ':D', ':O', ':;']))