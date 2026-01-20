import '../../dummy/styles.css'
export const CafeMenu=()=>{
return(<div>
    <div className="menu">
      <main>
        <h1>CAMPER CAFE</h1>
        <p className="established">Est. 2020</p>
        <hr/>
        <section>
          <h2>Coffee</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon"/>
          <article className="item">
            <p className="flavor">French Vanilla</p><p className="price">3.00</p>
          </article>
          <article className="item">
            <p className="flavor">Caramel Macchiato</p><p className="price">3.75</p>
          </article>
          <article className="item">
            <p className="flavor">Pumpkin Spice</p><p className="price">3.50</p>
          </article>
          <article className="item">
            <p className="flavor">Hazelnut</p><p className="price">4.00</p>
          </article>
          <article className="item">
            <p className="flavor">Mocha</p><p className="price">4.50</p>
          </article>
        </section>
        <section>
          <h2>Desserts</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="pie icon"/>
          <article className="item">
            <p className="dessert">Donut</p><p className="price">1.50</p>
          </article>
          <article className="item">
            <p className="dessert">Cherry Pie</p><p className="price">2.75</p>
          </article>
          <article className="item">
            <p className="dessert">Cheesecake</p><p className="price">3.00</p>
          </article>
          <article className="item">
            <p className="dessert">Cinnamon Roll</p><p className="price">2.50</p>
          </article>
        </section>
      </main>
      <hr className="bottom-line"/>
      <footer>
        <address>
          <p>
            <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
          </p>
          <p className="address">123 Free Code Camp Drive</p>
        </address>
      </footer>
    </div>
</div>)
}