export const onPhoneChange = (phone) => {
    console.log("Your changed phone: ", phone);
    return {
        type: 'PHONE_INPUT_CHANGED',
        payload: phone
    }
};
