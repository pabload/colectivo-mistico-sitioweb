import React from 'react'
import Link from 'next/link'
import Styles from './mainsectionarticles.module.scss'
const Pagination = ({ numPages, currentPage }) => {
  const pages = parseInt(numPages);
  const givePageLinks = () => {
    let links = [];
    for (var page = 1; page <= pages; page++) {
      links.push(
        <Link key={page} href="/articulos" as={`/articulos/${page}`}>
          <a className={`${Styles.paginationNumbers} ${currentPage == page ? Styles.currentPage : null}`}> {page} </a>
        </Link>
      )
    }
    return links;
  }
  const givExternalLinks = (type) => {
    if (type == 'backwards' && parseInt(currentPage) - 1 >= 1 ) {
      return (<Link href="/articulos" as={`/articulos/${parseInt(currentPage) - 1}`}>
        <a className={`${Styles.paginationNumbers}`}> Anterior </a>
      </Link>)
    } else {
      if (type == 'forward' && parseInt(currentPage) + 1 <= pages) {
        return( <Link href="/articulos" as={`/articulos/${parseInt(currentPage) + 1}`}>
          <a className={`${Styles.paginationNumbers}`}> Siguiente </a>
        </Link>)
      }
    }
  }
  return (
    <div className={' d-flex justify-content-center w-100'}>
      {givExternalLinks('backwards')}
      {givePageLinks()}
      {givExternalLinks('forward')}
    </div>
  )
}

export default Pagination
