'use client';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { Button } from '@/components/ui/button';

export default function NavMenu() {
    const { setTheme } = useTheme();
    const menus = {};
    const [open, setOpen] = useState(false);

    return (
        <div className="flex items-center">
            {/* responsive menu */}
            {Object.entries(menus).map(([href, label]) => (
                <a key={href} href={href} className="mx-2 text-white underline hover:no-underline">
                    {label}
                </a>
            ))}
            <a className="mx-2" href="https://github.com/bagusindrayana/extract-apk-web">
                <FaGithub className="text-white text-2xl" />
            </a>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" id="changeThemeMobile">
                        <BsSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <BsMoonStarsFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* hamburger menu for mobile */}
            <div className="md:hidden">
                <div className="flex mx-1 content-center items-center align-middle">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" id="changeThemeMobile">
                                <BsSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <BsMoonStarsFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Label className="ml-1" htmlFor="changeThemeMobile">
                        Theme
                    </Label>
                </div>
            </div>

            {/* responsive menu */}
            {open && (
                <div className="md:hidden">
                    {Object.entries(menus).map(([href, label]) => (
                        <a key={href} href={href} className="block text-white">
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
