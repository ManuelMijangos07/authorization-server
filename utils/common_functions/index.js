const moment = require('moment-timezone');
const momentLanguajes = require('../lang/moment-languajes');

moment.locale('es', momentLanguajes.es);
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

const cleanString = (string) => {
    const specialChars = '!@#$^&%*()+=-[]\/{}|:<>?,.';
    for (let i = 0; i < specialChars.length; i++) {
        string = string.replace(new RegExp('\\' + specialChars[i], 'gi'), '');
    }
    string = string.replace(/ /g, '');
    string = string.replace(/á/gi, 'a');
    string = string.replace(/é/gi, 'e');
    string = string.replace(/í/gi, 'i');
    string = string.replace(/ó/gi, 'o');
    string = string.replace(/ú/gi, 'u');
    string = string.replace(/ñ/gi, 'n');
    string = string.toUpperCase();
    return string;
}

const isset = (variable) => {
    if (typeof variable === 'string') {
        return variable.trim().length > 0;
    }
    try {
        return (typeof variable !== 'undefined' && variable != null);
    } catch (err) {
        return false;
    }
};

const setDefaultValue = (data, defaultData) => {
    if (!isset(data)) {
        return defaultData;
    }
    return data;
}

const returnPromise = (response, reject = false) => {
    if (reject) {
        return (new Promise((resolve, reject) => {
            reject(response);
        }));
    }
    return (new Promise((resolve, reject) => {
        resolve(response);
    }));
};
/*
PARAM: date: type String, format MM-DD-YYYY hh:mm:ss
 */
const getUtc = (date) => {
    const utc = moment.tz(date, 'MM-DD-YYYY hh:mm:ss', process.env.TZ_GT);
    return utc.utc();
};
/*
PARAM: utc: type Date
 */
const getDate = (utc, format = false) => {
    moment.locale(process.env.LANGUAJE);
    const date = moment(utc).tz(process.env.TZ_GT);
    if (format) { return date.format(format); }
    return date;
};

module.exports = Object.assign({}, {
    asyncForEach,
    cleanString,
    dateParser: {
        getUtc,
        getDate,
    },
    isset,
    returnPromise,
    setDefaultValue,
});
