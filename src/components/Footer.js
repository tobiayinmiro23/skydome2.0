import React from 'react'
import { footerImg, footerLinks } from '../database/footerDb'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <footer className='bg-[#282828]'>
            <h2 className='pt-[0.8rem] mb-[1rem] text-[white] text-center text-[1.5rem] font-bold'>Links</h2>
            <div className='flex item-center text-[#d6d3d3] justify-center m-[2rem] flex-wrap'>
                {
                    footerLinks.map(item => {
                        return <div className='' key={item.id}>
                            <p className='m-[2rem] cursor-pointer hover:text-[#38ef7d] productinfo'>{item.link}</p>
                        </div>
                    })
                }
            </div>
            <div className='flex justify-between bg-[#111010cc] w-[100%] text-[white]  px-[1rem] pt-[2.3rem] pb-[4.8rem] max-[960px]:block max-[960px]:p-[1.6rem] ' >
                <p className="cpy text-[white] productinfo max-[960px]:text-center max-[960px]:my-[1rem]"> &copy;Ayinmiro tobi <span className="span">&#124; all rights reserved</span></p>
                <div className='flex  w-[1.6rem] h-[1.6rem] max-[960px]:m-[auto] max-[960px]:my-[2rem]'>
                    <InstagramIcon className="mx-[0.4rem] cursor-pointer" />
                    <TwitterIcon className="mx-[0.4rem] cursor-pointer" />
                    <FacebookRoundedIcon className="mx-[0.4rem] cursor-pointer" />
                    <YouTubeIcon className="mx-[0.4rem] cursor-pointer" />
                </div>
                <div className='bg-[#000000b3] px-[0.9rem] pt-[0.3rem] pb-[0.9rem] rounded-[0.3rem] w-[fit-content] max-[960px]:m-[auto] max-[960px]:my-[2rem] '>
                    <h2 className='text-[1.3rem] font-bold max-[360px]:text-[1.2rem] max-[336px]:text-[1.13rem]'>Download the skydome app</h2>
                    <p className='text-[0.87rem] mb-[0.2rem]'>Get exclusive access</p>
                    <div className="flex">
                        {
                            footerImg.map(item => {
                                return <div key={item.id} className="flex item-center rounded-[0.3rem] border-[2px] mr-[1rem] border-[white] mg-[0.4rem] cursor-pointer hover:bg-[#ffffff40]">
                                    <div className="h-[1.2rem] ml-[0.1rem] w-[1.2rem] ">
                                        <div>{item.img}</div>
                                    </div>
                                    <div className="p-[0.2rem] leading-[1.1rem]">
                                        <p className='text-[0.75rem] text-center productinfo'>Get it on </p>
                                        <h2 className="text-[1rem] text-start" >App Store</h2>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
