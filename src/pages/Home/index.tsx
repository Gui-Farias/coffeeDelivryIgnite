import { Card } from "../../Components/Card";
import { Hero } from "../../Components/Hero";

import './styles.scss'

import * as coffeeDB from '../../db/coffeeDB.json';


export function Home() {
  const coffeeList = coffeeDB.coffee;
  
  return (
    <>
    <Hero />
    <section className="our-coffee">
      <h2 className="our-coffee__title">Nossos Cafés</h2>

      <div className="our-coffee__list">
        {
          coffeeList.map((coffee) => {
            return (
              <Card 
                imgCoffee={coffee.imgCoffee}
                price={coffee.price}
                tags={coffee.tags}
                text={coffee.text}
                title={coffee.title}
                qtd={coffee.qtd}
                key={coffee.title}
              />
            )
          })
        }
      </div>
    </section>
  </>
  )
}
