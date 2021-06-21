import React from 'react'
import Image from 'next/image'
import HeaderItems from './HeaderItems'
import {
    BadgeCheckIcon,
    CollectionIcon, 
    HomeIcon, 
    LightningBoltIcon, 
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 sm:items-center justify-between'>
            <div className='flex mt-2 flex-grow justify-evenly max-w-2xl'>
                <HeaderItems title='Home' Icon={HomeIcon} />
                <HeaderItems title='Badge' Icon={BadgeCheckIcon} />
                <HeaderItems title='Collection' Icon={CollectionIcon} />
                <HeaderItems title='Lighting' Icon={LightningBoltIcon} />
                <HeaderItems title='Search' Icon={SearchIcon} />
                <HeaderItems title='User' Icon={UserIcon} />
            </div>
            
            <Image
                className='object-contain'
                src='https://links.papareact.com/ua6'
                width= {200}
                height= {100}
            />
        </header>
    )
}

export default Header
