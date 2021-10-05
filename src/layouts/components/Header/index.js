import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header({ content }) {
  useEffect(() => {
    // tornar a navbar menor a partir de 100px "scrollados"
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
      100 < window.scrollY ? navbar.classList.add("shrink") : navbar.classList.remove("shrink");
    }

    // fechar a navbar quando um link for clicado no mobile
    const navItems = navbar.querySelectorAll('.navbar a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const nav = document.getElementById('navigation');
        let bsCollapse = new bootstrap.Collapse(nav, { toggle: false });
        bsCollapse.hide();
      });
    });

    // retirar o foco do link "Novos Negócios depois de clicado"
    const dropBtn = document.querySelector('.dropdown .nav-link');
    dropBtn.addEventListener('click', () => {
      dropBtn.blur();
    })
  }, []);

  function DropDown() {
    return (
      <ul>
        {
          content.novosNegociosLinks.map((item, index) => {
            return (
              <li key={`linkHeader-${index}`}>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>{item.text}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${content.logo.url}`} alt="Investtools" />
            </a>
          </Link>
          <button className={`navbar-toggler collapsed border-0 ${styles.toggler}`} data-bs-toggle="collapse" data-bs-target="#navigation">
            <span className={styles.hamburgerBox}>
              <span className={styles.hamburgerInner} />
            </span>
          </button>
          <div className={`${styles.navCollapse} navbar-collapse collapse`} id="navigation">
            <ul className={`${styles.mainNav} navbar-nav ms-auto`}>
              <li className="nav-item">
                <a href={`https://investtools.com.br${content.aInvesttools.link}`} className="nav-link">{content.aInvesttools.text}</a>
              </li>

              <li className="nav-item">
                <a href={`https://investtools.com.br${content.performIt.link}`} className="nav-link">{content.performIt.text}</a>
              </li>

              <li className="nav-item">
                <a href={`https://investtools.com.br${content.diligenceIt.link}`} className="nav-link">{content.diligenceIt.text}</a>
              </li>

              <li className="nav-item">
                <a href={`https://investtools.com.br${content.arconIt.link}`} className="nav-link">{content.arconIt.text}</a>
              </li>

              <li className="nav-item dropdown">
                <a href={`https://investtools.com.br${content.novosNegocios.link}`} className="nav-link">{content.novosNegocios.text}</a>
                <DropDown />
              </li>

              <li className="nav-item">
                <a href={content.blog.link} className="nav-link">{content.blog.text}</a>
              </li>

              <li className="nav-item">
                <a href={`https://investtools.com.br${content.contact.link}`} className="nav-link">{content.contact.text}</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" target="_blank" href={content.careers.link} rel="noopener noreferrer">{content.careers.text}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}