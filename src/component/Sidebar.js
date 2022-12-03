import React from 'react'
import './Sidebar.css';
import {GrUserManager} from 'react-icons/gr'
import {MdArrowDropDown} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {GoNote} from 'react-icons/go'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {GiCheckMark} from 'react-icons/gi'
import {IoMdArrowDropright} from 'react-icons/io'
import {GoLaw} from "react-icons/go"
import{IoMdCalculator} from 'react-icons/io'
import {AiOutlineForm} from 'react-icons/ai'
import {BsFileRuled} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {MdLocalGroceryStore} from 'react-icons/md'
import {BsJournals} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {AiFillCalculator} from 'react-icons/ai'


const Sidebar = () => {
  return (
    <>
    
    <div className='container'>
        
    <div className='card-1'>
    <GrUserManager className='user-icon' />
    <h6 className='text-under-user-icon'>Eze Joseph Ajali</h6>

    <div className='div-1'>
    <h6 className='text-user-icon'>eze.ajalli.joseph@gmail.com</h6> 
    <MdArrowDropDown  className='arrow-dropdown-arrow'/>
    </div>
    </div>
    <div className='card-2'>
    <div className='heading'>
        <h3>App</h3>
    </div>
    <div className='div-for-text-and-icon'>
        <AiFillHome className='home-icon' />
        <h6 className='home-text'>Home</h6>
    </div>
    <div className='div-for-text-and-icon'>
        <CgProfile className='icon' />
        <h6 className='icon-text'>Profile</h6>
    </div>
    <div className='div-for-text-and-icon'>
    <MdOutlineMeetingRoom className='icon' />
    <h4 className='icon-text'>AAER Meets</h4>
    </div>
    <div className='div-for-text-and-icon'>
    <GoNote  className='icon'/>
    <h4 className='icon-text'>AAER note</h4>
    </div>
    <div className='div-for-text-and-icon'>
    <BsFillBookmarkFill className='icon' />
    <h4 className='icon-text'>Bookmark</h4>
    </div>
    </div>

    <div className='card-3'>
        <h5 className='heading'>Legal Research Tools</h5>
        <div className='div-for-text-and-icon'>
            <GiCheckMark  className='icon'/>
            <h6 className='icon-text'>Latest judgement</h6>
            <IoMdArrowDropright className='icon' />
        </div>
        <div className='div-for-text-and-icon'>
            <GiCheckMark className='icon' />
            <h6 className='icon-text'>Law report</h6>
            <IoMdArrowDropright className='icon' />
        </div>
        <div className='div-for-text-and-icon'>
            <GoLaw className='icon' />
            <h6 className='icon-text'>Law of the federation</h6>
        </div>
        <div className='div-for-text-and-icon'>
            <IoMdCalculator className='icon' />
            <h6 className='icon-text'>Regulation of MDAs</h6>
        </div>
    </div>
    <div className='card-4'>
        <h5 className='heading'>Court and Agreement</h5>
        <div className='div-for-text-and-icon'>
        <AiOutlineForm className='icon' />
            <h6 className='icon-text'>Court form</h6>
            <IoMdArrowDropright className='icon' />
        </div>
        <div className='div-for-text-and-icon'>
        <BsFileRuled  className='icon'/>
            <h6 className='icon-text'>Rule of court</h6>
            <IoMdArrowDropright className='icon' />
        </div>
        <div className='div-for-text-and-icon'>
        <AiFillMessage className='icon' />
            <h6 className='icon-text'>Form and agreement</h6>   
        </div>
    </div>

    <div className='card-5'>
        <h5 className='heading'>Continous Education</h5>
        <div className='div-for-text-and-icon'>
            <MdLocalGroceryStore className='icon' />
            <h6 className='icon-text'>Buy Textbook</h6>
        </div>
        <div className='div-for-text-and-icon'>
            <MdLocalGroceryStore className='icon' />
            <h6 className='icon-text'>Sell Textbook</h6>
        </div>
        <div className='div-for-text-and-icon'>
            <BsJournals className='icon' />
            <h6 className='icon-text'>Sell Textbook</h6>
        </div>
    </div>
    <div className='card-6'>
        <h5 className='heading'>Extra</h5>
        <div className='div-for-text-and-icon'>
        <AiFillStar className='icon' />
        <h6 className='icon-text'>Nugget</h6>
        </div>
        <div className='div-for-text-and-icon'>
        <AiFillCalculator className='icon' />
        <h6 className='icon-text'>AEER blog</h6>
        </div>

    </div>

    </div>
    </>
  )
}

export default Sidebar