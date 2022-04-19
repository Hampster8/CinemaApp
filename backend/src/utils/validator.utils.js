const validatePassword = (str) => {
    var pattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    if (!str || str.length === 0) return false;
    return pattern.test(str);
}

module.exports = {
    validatePassword
};