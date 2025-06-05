function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-100 p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Guide</a>
        <a className="link link-hover">Sitemap</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  )
}

export default Footer;