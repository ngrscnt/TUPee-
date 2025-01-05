export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger border-bottom box-shadow">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          <img src="./tupee_logo.png" alt="..." width="30" className="me-2"/> TUPee
        </a>
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
              <a className="nav-link text-light" aria-current="page" href="#">
                Home
              </a>
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
                  <a className="dropdown-item" href="#">
                    My Order
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Wishlists
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                Seller's Profile
              </a>
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
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Log Out
                  </a>
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
