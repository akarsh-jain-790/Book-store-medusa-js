import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import styles from "../../styles/nav-bar.module.css";
import about_style from "../../styles/landing-page.module.css";
import { quantity, sum } from "../../utils/helper-functions";

export const NavBar = () => {
  const { updateCartViewDisplay } = useContext(DisplayContext);
  const { cart } = useContext(StoreContext);
  const [isCheckout, setIsCheckout] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/checkout" || router.pathname === "/payment") {
      setIsCheckout(true);
    } else {
      setIsCheckout(false);
    }
  }, [router.pathname]);

  return (
      <div className={styles.container}>
       <section class="nav-bar sticky-top">
          <nav class={`${styles.navbar} navbar-expand-lg navbar-light`}>
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span ><i class="fas fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <h4><a class="navbar-brand" href="/">BookStore</a></h4>
                  <ul class="navbar-nav ms-auto mx-4 ">
                    <button class={`${styles.btn} text-white`}>
                        <a class={`${styles.nav_link} text-white`} href={`#${about_style.aboutus}`}>ABOUT US</a>
                    </button>
                    <li class="nav-item mx-2">
                      {!isCheckout ? (
                      <button
                        className={`${styles.btn} ${styles.nav_link} text-white`}
                        onClick={() => updateCartViewDisplay()}
                      >
                        <BiShoppingBag />{" "}
                        <span>
                          {cart.items.length > 0 ? cart.items.map(quantity).reduce(sum) : 0}
                        </span>
                      </button>
                    ) : null}
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
      </section>
      </div>
  );
};

export default NavBar;
