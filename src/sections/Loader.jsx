function Loader({ percentage, loading }) {
  if (!loading) return null
  return (
    <div className="qtecLoader">
      <img src="/images/loader.svg" alt="" />
      <div className="loading-bar">
        <div className="loaderFill" style={{ width: `${Math.floor(percentage)}%` }}></div>
      </div>
    </div>
  )
}

export default Loader 