"use client";
import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { Plus } from 'lucide-react';

const Sidebar = () => {
  const [isOpen , setIsOpen] =useState(true)
  return (
    <div className='min-h-[100vh] inline-flex flex flex-col justify-between bg-bgSecondryColor py-6 px-4'>
      <div>
       <Menu 
        size={25}
        onClick={()=>setIsOpen(!isOpen)}
        className='cursor-pointer text-softTextColor'
        />
        <div className='mt-2.5 inline-flex items-center gap-2.5'>
          <Plus
          size={20}
          className='cursor-pointer text-softTextColor'
          />
          <p>New Chat</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
