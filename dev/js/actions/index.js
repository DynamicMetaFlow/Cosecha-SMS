export const onPhoneChange = (phone) => {
    console.log("You changed phone: ", phone);
    return {
        type: 'PHONE_INPUT_CHANGED',
        payload: phone
    }
};
