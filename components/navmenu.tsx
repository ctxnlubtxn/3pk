'use client';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { Button } from '@/components/ui/button';

export default function NavMenu() {
    const { setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* responsive menu */}
            <div className="hidden md:flex items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" id="changeThemeMobile">
                            <BsSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <BsMoonStarsFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {/* <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
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
