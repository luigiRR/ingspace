import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck, faIndustry, faDoorClosed, faCreditCard} from '@fortawesome/free-solid-svg-icons'
import Navigation from '../components/Navigation/Navigation'

function Home() {
  return (
    <div className="">
      <div className="w-full h-20 bg-blue-500">
        <Navigation/>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full h-96">
        <div><p className="text-center">01</p></div>
        <div className="container mt-10">
          <div className="mb-5">
            <h className="font-bold uppercase text-2xl">nosotros</h>
            <p className="text-justify text-sky-800 text-md">Somos una empresa lider en el mercado, la cual brindamos diferentes
                servicios en base a toda nuestra expericiencia. Oferecemos buena calidad, 
                diferenciandonos en nuestro estilo industrial que nos representa.
                Tenemos un equipo comprometido, responsavle con nuestro clientes.
            </p>
          </div>

          <div className="mb-5">
            <h className="font-bold uppercase text-2xl">misión</h>
            <p className="text-justify text-sky-800 text-md">hola <FontAwesomeIcon icon="fa-brands fa-twitter" /> </p>
          </div>

          <div className="mb-5">
            <h className="font-bold uppercase text-2xl">visión</h>
            <p className="text-justify text-sky-800 text-md">hola</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-300 w-full place-content-center mt-5">
        <p className="font-bold text-center uppercase text-2xl">conoce mas de nosotros</p>
        <div className="container grid grid-cols-5 gap-5 mt-5 flex ">
          <div className="">
            <FontAwesomeIcon icon={faTruck} size="8x" className="text-sky-800"/>
            <p className="text-center">Delivery</p>
            <p>Costo de envio dependiendo de la zona</p>
          </div>

          <div className="">
            <FontAwesomeIcon icon={faIndustry} size="8x" className="text-sky-800"/>
            <p className="text-center">Despacho</p>
            <p>Recojo de producto en tienda, máximo 24 horas</p>
          </div>

          <div className="">
            <FontAwesomeIcon icon={faDoorClosed} size="8x" className="text-sky-800"/>
            <p className="text-center">Fabricación</p>
            <p>Tiempo de fabricación de 6 a 8 dias hábiles</p>
          </div>

          <div className="bg-gray-50">
            <p>No encuentro escarapela</p>
          </div>

          <div className="">
            <FontAwesomeIcon icon={faCreditCard} size="8x" className="text-sky-800"/>
            <p className="text-center">Metodos de pago (VISA/MASTERCARD)</p>
            <ul>
              <li>BCP/yape</li>
              <li>INTERBANK/plin</li>
              <li>transferencia bancaria</li>
              <li>tarjeta de crédito</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div><p className="text-gray-50 font-bold text-center bg-pink-500 h-52">INGSPACE</p></div>
        <div><p className="text-gray-50 font-bold text-center bg-pink-500 h-52">COTIZA</p></div>
      </div>
      <div className="bg-gray-500 w-full h-10">
        <p className="text-gray-50 font-bold text-center">INFORMACION</p>
      </div>
    </div>
  )
}

export default Home