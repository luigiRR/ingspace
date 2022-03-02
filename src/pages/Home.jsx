import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck, faIndustry, faDoorClosed, faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faLinkedin, faCcVisa, faCcMastercard} from '@fortawesome/free-brands-svg-icons'
import Navigation from '../components/Navigation/Navigation'

function Home() {
  return (
    <div className="">
      <div className="w-full h-20">
        <Navigation/>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full h-96">
        <div><p className="text-center">01</p></div>
        <div className="container mt-5 font-doka">
          <div className="mb-5">
            <h className="font-bold uppercase text-lg text-orange-800">nosotros</h>
            <p className="text-justify text-md">Somos una empresa lider en el mercado, 
                la cual brindamos diferentes
                servicios en base a toda nuestra expericiencia. Oferecemos buena calidad, 
                diferenciandonos en nuestro estilo industrial que nos representa.
                Tenemos un equipo comprometido, responsable con nuestro clientes.
            </p>
          </div>

          <div className="mb-5">
            <h className="font-bold uppercase text-lg text-orange-800">misión</h>
            <p className="text-justify text-md">hola</p>
          </div>

          <div className="mb-5">
            <h className="font-bold font-doka uppercase text-lg text-orange-800">visión</h>
            <p className="text-justify text-md">hola</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <p className="font-bold text-center text-orange-800 font-doka uppercase text-lg">conoce mas de nosotros</p>
        <div className="container font-doka grid grid-cols-5 gap-5 mt-5 flex justify-center">
          <div className="text-center">
            <p className=""><FontAwesomeIcon icon={faTruck} size="3x" className="text-sky-800"/></p>
            <p className="">Delivery</p>
            <p>Costo de envio dependiendo de la zona</p>
          </div>

          <div className="text-center">
            <p className=""><FontAwesomeIcon icon={faIndustry} size="3x" className="text-sky-800"/></p>
            <p className="">Despacho</p>
            <p>Recojo de producto en tienda, máximo 24 horas</p>
          </div>

          <div className="text-center">
            <p className=""><FontAwesomeIcon icon={faDoorClosed} size="3x" className="text-sky-800"/></p>
            <p className="">Fabricación</p>
            <p>Tiempo de fabricación de 6 a 8 dias hábiles</p>
          </div>

          <div className="">
            <p><FontAwesomeIcon size="3x" className="text-sky-800"/> </p>
            <p>No encuentro escarapela</p>
          </div>

          <div className="text-center">
            <p className=""><FontAwesomeIcon icon={faCcVisa} size="3x" className="text-sky-800 mr-1"/>
              <FontAwesomeIcon icon={faCcMastercard} size="3x" className="text-sky-800 ml-1"/></p>
            <p className="">Metodos de pago</p>
            <ul>
              <li>BCP/yape</li>
              <li>INTERBANK/plin</li>
              <li>transferencia bancaria</li>
              <li>tarjeta de crédito</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-5">
        <div className="container grid grid-rows-2 grid-flow-col gap-2">
          <div className="">
            <p className="font-bold text-center text-2xl uppercase">ingspace</p>

            <ul className="mt-5">
              <li className="mb-5"> 
                <FontAwesomeIcon icon={faLocationDot} size="1x" className="text-sky-800"/>
                <h className="text-lg ml-2">Direccion</h> 
              </li>
              <li className="mb-5"> 
                <FontAwesomeIcon icon={faEnvelope} size="1x" className="text-sky-800"/>
                <h className="text-lg ml-2">Correo</h>
              </li>
              <li> 
                  <FontAwesomeIcon icon={faPhone} size="1x" className="text-sky-800"/>
                <h className="text-lg ml-2">Telefono</h>
              </li>
            </ul>
        
          </div>
          
          <div className="">
            <p className="font-bold text-center text-2xl mb-5 uppercase">siguenos</p>
            <div className="grid grid-cols-3 gap-3 flex algin-items-center">

              <div>
                <a href="/"><FontAwesomeIcon icon={faFacebook} size="2x" className=""/></a>
                <p>facebook</p>
              </div>
              <div>
                <a href="/"><FontAwesomeIcon icon={faInstagram} size="2x" className=""/></a>
                <p>instagram</p>
              </div>
              <div>
                <a href="/"><FontAwesomeIcon icon={faLinkedin} size="2x" className=""/></a>
                <p>linkedin</p>
              </div>
            </div>
          </div>

        </div>
        <div><p className="text-gray-50 font-bold text-center bg-pink-500 h-96">COTIZA</p></div>
      </div>
      <div className="bg-gray-500 w-full h-10">
        <p className="text-gray-50 font-bold text-center">INFORMACION</p>
      </div>
    </div>
  )
}

export default Home