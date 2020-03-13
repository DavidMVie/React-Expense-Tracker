const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p>Whoops, looks like you're a little lost <Link to="/"> return home?</Link></p>
    </div>
  )
}

export { PageNotFound as default }