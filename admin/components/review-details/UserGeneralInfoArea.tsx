import React from "react";
import InfoCard from "@/components/design-system/InfoCard";

interface UserGeneralInfoProps {
    userData: {
        userName: string;
        userEmail: string;
        creationDate: string;
    };
}

export default function UserGeneralInfoArea({userData}: UserGeneralInfoProps) {
    return (
        <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-400 via-green-400 to-green-600 text-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            <div className='flex flex-col  justify-between'>
                <InfoCard title='Username' value={userData.userName}/>
                <InfoCard title='Email' value={userData.userEmail}/>
                <InfoCard title='Review Creation Date' value={userData.creationDate}/>
            </div>
        </div>
    );
}
