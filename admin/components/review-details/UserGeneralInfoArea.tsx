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
        <div className="p-4 border rounded-lg bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            <div className='flex justify-between'>
                <InfoCard title='Username' value={userData.userName}/>
                <InfoCard title='Email' value={userData.userEmail}/>
                <InfoCard title='Creation Date' value={userData.creationDate}/>
            </div>
        </div>
    );
}
