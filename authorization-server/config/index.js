'use strict'

exports.token = {
    expiresIn: (60 * 60 * 24 * 30),
    calculateExpirationDate : () => new Date(Date.now() + (this.token.expiresIn * 1000)),
};

exports.codeToken =  {
    expiresIn: 5 * 60,
};

exports.refreshToken = {
    expiresIn: 52560000,
};

exports.db = {
    timeToCheckExpiredTokens: 14400,
};

exports.session = {
    maxAge: 3600000 * 24 * 7 * 52,
    secret: 'A Secret That Should Be Changed',
};