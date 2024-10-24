import React, {useState} from 'react'
import Button from "@/components/common/Button";

const GoogleLoginButton = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitGoogle = async () => {

    }

    return (
        <Button
            title="Connect with Google"
            onPress={submitGoogle}
            containerStyles="mt-2"
            isLoading={isSubmitting}
            icon={'logo-google'}
        />
    )
}
export default GoogleLoginButton
