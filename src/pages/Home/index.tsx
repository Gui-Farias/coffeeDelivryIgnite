import { Card } from "../../Components/Card";
import { Hero } from "../../Components/Hero";

import './styles.scss'

import * as coffeeDB from '../../db/coffeeDB.json';


export function Home() {
  const coffeeList = coffeeDB.coffee;
  
  return (
    <>
    <Hero />
    <section>
      <h2>Nossos Cafés</h2>

      <div className="coffee-list">
        {
          coffeeList.map((coffee) => {
            return (
              <Card 
                imgCoffee={coffee.imgCoffee}
                price={coffee.price}
                tags={coffee.tags}
                text={coffee.text}
                title={coffee.title}
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
