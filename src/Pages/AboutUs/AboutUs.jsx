import React,{useState,useEffect} from "react";
import './AboutUs.css'

  
function AboutUs({image, name, price, sale, quantity,button}){


    return(
        <div className="card">
            <div className="card1">
                <div class="card-overlay"></div>
                <div className="card-inner">
                    <img src={image} alt="" />
                    <p className="card__title">
                        {name}
                    </p>
                    <p className="card__price">
                        Цена: {price} руб
                    </p>
                    <div className="sale_quantity">
                        <p className="sale">
                            Скидка: -{sale}%
                        </p>
                        <div className="quantity">
                            {quantity} продано
                        </div>
                        <div className="button">
                            {button} добавить в корзину
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
        
    )
}

export default AboutUs
