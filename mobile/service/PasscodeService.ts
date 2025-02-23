import {securePostRequest} from "@/service/beclient";

export const validatePasscode = async (passcode) => {
    return await securePostRequest("/passcode/verify",{passcode});
};