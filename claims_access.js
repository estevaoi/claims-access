function claims_access(needle, haystack, argStrict = false) {
    //  discuss at: https://github.com/estevaoi/claims-access/issues
    //   example 1: in_array('application_get', ['application_post', 'application_get', 'application_put']);
    //   returns 1: true
    //   example 4: in_array('application_get', ['application_post', 'application_get-all', 'application_put'], true);
    //   returns 4: false

    var strict = !!argStrict;

    //in just one for, in order to improve the performance
    //deciding wich type of comparation will do before walk array
    if (strict) {
        return haystack.indexOf(needle) > -1;
    } else {
        var value = haystack.filter((val) => {
            if (val.indexOf(needle) > -1) {
                return true;
            }
        });
        return (value != '') ? true : false;
    }
}

module.exports = claims_access;
