'use client'
import React, { useRef, useState } from 'react'
import style from '../App.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Nav = () => {
   const [open, setOpen] = useState(false)

    const li = [
        {
            ruta :"/",
            label:"INICIO"
        },{
            ruta :"/contacto",
            label:"CONTACTO"
        },{
            ruta :"/sobrenosotros",
            label:"SOBRE NOSOTROS"
        },{
            ruta :"/contenido",
            label:"CONTENIDO"
        },{
            ruta :"/tecnologias",
            label:"TECNOLOGIAS"
        }
    ]
  return (   
           <> {
                open === false ? (
                    <nav            
                        className={style.nav}>
                        <div></div>
                        <ul className={style.ul}>
                            {li.map((li)=>{
                                return( 
                                    <a href="" key={li.ruta}>
                                        <li                                            
                                            className={style.li}>
                                                {li.label}
                                        </li>
                                    </a>
                                )
                            })}
                        </ul>
                        <div className={style.logo}>              
                                <GiHamburgerMenu onClick={()=>setOpen(true)}/>
                        </div>
                </nav>
                ):(
                    <div className={style.listOpen}>
                        <div>
                            <ul className={style.ulOpen}>
                                {li.map((li)=>{
                                    return( 
                                    <a href="" key={li.ruta}>
                                        <li                              
                                            className={style.liOpen}>
                                                {li.label}
                                        </li>
                                    </a>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className={style.openButton}>
                            <span>
                                    <GiHamburgerMenu 
                                        onClick={()=>setOpen(false)}
                                        style={{
                                            color:'rgb(43, 220, 61)',
                                            fontSize:'2rem'}}
                                        />                                  
                            </span>
                                            
                        </div>

                    </div>
                
                )
            }</>
  )
}

export default Nav