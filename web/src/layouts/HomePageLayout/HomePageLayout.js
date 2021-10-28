const HomePageLayout = ({ children }) => {
  return (
    <div>
      <div className="rounded-lg shadow-lg mb-2 sm:mx-8 h-screen bg-fall-colors">
        <p>Testing</p>
      </div>
      {children}
    </div>
  )
}

export default HomePageLayout
