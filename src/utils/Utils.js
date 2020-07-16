import moment from 'moment';

export const getTimeInUtc = (date1, formt) => {
    let date = new Date(date1);
    moment.tz
    return moment(date.toISOString()).utcOffset("PDT").format(formt);
}

export function getIsCheck(check, index) {
    let temp = check;

    if (temp == undefined && index != 0) {
        temp = true
    }
    else if (temp == undefined && index == 0) {
        temp = true
    }
    else {
        temp = !temp;
    }
    //console.warn("check--", check, "----index--", index, "-----temp----", temp);
    return temp;
}

export function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

export function addCommasIndian(nStr) {
    var x = nStr;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res
}

