import React from 'react'
import ProfileAside from './ProfileAside'

export default function Profile() {
    return (
        <aside className=" md:col-span-3 h-screen md:max-h-[65vh] rounded-lg w-full sticky top-20">
            <ProfileAside />
        </aside>
    )
};
