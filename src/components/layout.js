import { Link, Links } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger border-bottom box-shadow">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <img src="./tupee_logo.png" alt="..." width="30" className="me-2"/> TUPee
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="pages" to="/admin/products">
                Home 
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/orders">
                    My Order
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                  <Link className="dropdown-item" to="/wishlists">
                    Wishlists
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="pages" to="/SProfile">
                Seller's Profile
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Me
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Log Out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export function Footer() {
    return (
        <div className="text-center p-4 border-top">
            <img src="./tupee_logo.png" alt="..." width="30" className="me-2"/> 
            TUPee
        </div>
    )
}
