import './Header.css'

export const Header = () => {
  return (
    <header className="border border-2 border-white py-3 px-3 mx-auto">
      <div className="d-flex flex-row justify-content-between">
        <div className="">
          <a aria-current="page" href="/" className="Logo-link">
            <h4 className="Logo-text m-0 fw-bold">LearnHub</h4>
          </a>
        </div>
        <a aria-label="admin-page" href="/form" className="m-0">
          <button className="btn rounded px-2 py-1 text-white"> Admin</button>
        </a>
      </div>
    </header>
  );
}
