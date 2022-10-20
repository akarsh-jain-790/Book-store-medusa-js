import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import StoreContext from "../context/store-context";
import styles from "../styles/landing-page.module.css";
import store from "../styles/store.module.css";
import { createClient } from "../utils/client";
import { formatPrices } from "../utils/prices";

export default function Home({ products }) {
  const { cart } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div>
        {/* <!-- banner section --> */}
        <section id={styles.banner}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className={styles.promo_title}>BEST PLACE TO BUY BOOKS </h1>
                <h5>
                 Get your new books with the best price.
                </h5>
                <br></br>
                <button className={styles.RentNow}>BUY NOW</button>
              </div>
              <div className="col-md-6">
                <img
                  src="assets/images/bannerIMG/newImg.png"
                  className={`${styles.img_book} img-fluid`}
                />
              </div>
            </div>
          </div>
          <img src="assets/images/wave1.png" className={styles.wave - 1} />
        </section>
        {/* <!-- just added section --> */}
        <section className="products">
          <div className="container text-center">
            <h1 className={styles.title}>Just Added</h1>
            <hr className={styles.line} />
            <div className="row my-3 mx-5">
              {products &&
                products.map((p) => {
                  return (
                    <div key={p.id} className="col-md-2 mx-3 my-2">
                      <Link
                        href={{
                          pathname: `/product/[id]`,
                          query: { id: p.id,  products:products},
                        }}
                        passHref
                      >
                        <div
                          className="card"
                          style={{ width: 12 + "rem", height: 20 + "rem" }}
                        >
                          <a target="_blank">
                            <div className={store.imgHolder}>
                              <Image
                                className="card-img-top"
                                src={p.thumbnail}
                                alt="thumbnail"
                                width={300}
                                height={230}
                              ></Image>
                            </div>
                            <div className="card-body">
                              <p className="card-text">{p.title}</p>
                              <p className="card-text">{p.description.slice(20, 50)}</p>
                              <p style={{ color: "#8a4af3" }}>
                                {formatPrices(cart, p.variants[0])}
                              </p>
                            </div>
                          </a>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
            <hr className={styles.line} />
          </div>
        </section>
        {/* <!-- about us --> */}
        <section id={styles.aboutus}>
          <div className="container ">
            <h1 className={`${styles.title} text-center`}>About Us</h1>
            <div className="row">
              <div className="col-md-6">
                <p className={styles.aboutus_title}>Why choose us</p>
                <ul className="list">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <img src="assets/images/network.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- footer section --> */}
        <section id={styles.contact}>
          <img src="assets/images/wave2.png" className={styles.wave - 2} />
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-box">
                <h1>BookStore</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  vel tempore iure non, mollitia sunt soluta placeat pariatur?
                  Architecto, harum!
                </p>
              </div>
              <div className="col-md-4 my-4 mx-5">
                <p>
                  <b>CONTACT US</b>
                </p>
                <p>
                  <i className="fas fa-map-marker"></i>IT Park,Bhopal
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i>0755-662630
                </p>
                <p>
                  <i className="fas fa-envelope"></i>Bookstore@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <script
          src="https://kit.fontawesome.com/e6843aaddf.js"
          crossorigin="anonymous"
        ></script>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient();
  const { products } = await client.products.list();

  return {
    props: {
      products,
    },
  };
};
