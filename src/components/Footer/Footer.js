import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="text-center px-4 pt-5 pb-4">
          <a href='/'><h1 className="fw-bold fs-1 Logo-text">LearnHub</h1></a>
          <p className="fs-6 text-secondary py-2">
            © 2022 Tailwind Labs Inc. All rights reserved.
          </p>
          <div className="d-flex justify-content-center fw-semibold py-3">
            <a href="/form" className="px-3 text-white">
              Form
            </a>
            <div className="vr text-white"></div>
            <a href="/" className="px-3 text-white">
              Notes
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
