import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileTabs from './ProfileTabs'

export default function FullProfile() {
    return (
        <section className="col-span-9 pb-32 bg-white min-h-screen rounded-t-lg drop-shadow-sm border overflow-hidden">
            <ProfileHeader />
            <ProfileTabs />
        </section>
    )
}
