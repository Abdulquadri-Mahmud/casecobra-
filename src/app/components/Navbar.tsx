import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
    const user = undefined;
    const isAdmin = false;

  return (
    <nav className='sticky top-0 z-[100] h-14 inset-x-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                <Link href='/' className='flex z-40 font-semibold text-xl'>
                    case<span className='text-green-600'>cobra</span>
                </Link>
                <div className="h-full flex justify-center items-center gap-4">
                    {
                        user ? (
                            <>
                                <Link href='/api/auth/logout'>
                                    <button className="p-1 px-2 text-black rounded-md bg-slate-200">Sing Out</button>
                                </Link>
                                {
                                    isAdmin ? (
                                        <>
                                            <Link href='/api/auth/logout'>
                                                <button className="p-1 px-2 text-black rounded-md bg-slate-200">Dashboard ✨</button>
                                            </Link>
                                        </>
                                    ) : null
                                }
                                <Link href='/api/configure/upload'>
                                    <button className="p-1 px-2 text-white rounded-md bg-green-600 flex gap-0.5 items-center">Create Case <ArrowRight/></button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href='/api/auth/register'>
                                    <button className="p-1 px-2 text-black rounded-md bg-slate-200">Sing Up</button>
                                </Link>
                                <Link href='/api/auth/login'>
                                    <button className="p-1 px-2 text-black rounded-md bg-slate-200">Login</button>
                                </Link>
                                <Link href='/api/configure/upload' className='hidden md:flex items-center'>
                                    <button className="p-1 px-2 text-white rounded-md bg-green-600 flex gap-0.5 items-center">Create Case <ArrowRight/></button>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}
