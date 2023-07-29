'use client';

import Link from 'next/link';
import React from 'react';
import { clsx } from 'clsx';
import { LayoutGroup, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';


const buttons = {
    '/': {
        name: 'Upload a receipt',
    },
    '/receipts': {
        name: 'My receipts'
    }
};

const Navbar: React.FC = () => {

    let pathname = usePathname() || '/';

    return (
        <LayoutGroup>
            <nav className="relative z-0 bg-white p-4">
                <h1 className="flex text-6xl font-bold justify-center p-6">Travel Receipt Scanner 🛫🚌</h1>
                <br />
                {/* <ul className="flex list-none space-x-4">
                    <Link className="flex justify-center bg-orange-200 hover:bg-neutral-400 flex-grow px-16 py-4 rounded-md" href="/">
                        <li>
                            Upload a receipt
                        </li>
                    </Link>
                    <Link className="flex justify-center bg-orange-200 hover:bg-neutral-400 flex-grow px-16 py-4 rounded-md" href="/receipts">
                        <li>
                            My receipts
                        </li>
                    </Link>
                </ul> */}

                <div className="flex flex-row justify-center space-x-0 mb-2 mt-2 md:mt-0">
                    {Object.entries(buttons).map(([path, { name }]) => {
                        const isActive = path === pathname;
                        return (
                            <Link
                                scroll={false}
                                key={path}
                                href={path}
                                className={clsx(
                                    'transition-all hover:text-blue-500 flex align-middle',
                                    {
                                        'text-neutral-500': !isActive,
                                        'font-bold': isActive,
                                    }
                                )}
                            >
                                <span className="relative py-[5px] px-[10px]">
                                    {name}
                                    {path === pathname ? (
                                        <motion.div
                                            className="absolute inset-0 bg-blue-200 rounded-xl z-[-1]"
                                            layoutId="sidebar"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 1000,
                                                damping: 40,
                                            }}
                                        />
                                    ) : null}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </LayoutGroup>
    );
};

export default Navbar;
