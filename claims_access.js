function claims_access(needle, haystack, argStrict) {
    //  discuss at: https://github.com/estevaoi/claims-access/issues
    //   example 1: in_array('application_get', ['application_post', 'application_get', 'application_put']);
    //   returns 1: true
    //   example 4: in_array('application_get', ['application_post', 'application_get-all', 'application_put'], true);
    //   returns 4: false

    var key = '';
    var strict = !!argStrict;

    //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
    //in just one for, in order to improve the performance
    //deciding wich type of comparation will do before walk array
    if (strict) {
        return haystack.indexOf(claims) > -1;
    } else {
        return haystack.filter((val) => {
            if (val.indexOf(needle) > -1) {
                return true;
            }
        });
    }

    return false;
}

module.exports = claims_access;