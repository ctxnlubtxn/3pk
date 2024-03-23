'use client';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import * as React from 'react';

export default function NavMenu() {
    const { setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* responsive menu */}
            <div className="hidden md:flex items-center">
            </div>

            {/* hamburger menu for mobile */}
            <div className="md:hidden">
                <TiThMenu className="text-2xl"></TiThMenu>
            </div>

            {/* responsive menu */}
            {open && (
                <div className="md:hidden">
                    {/* <a href="/" className="block text-white">Home</a>
                    <a href="/scam-apk" className="block text-white">SpamScam APK</a> */}
                </div>
            )}
        </div>
    );
}
