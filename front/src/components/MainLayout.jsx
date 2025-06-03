function MainLayout() {
  return (
    <div className="flex flex-col h-screen bg-blue-200">
      <div className="flex-initial min-h-20 bg-green-400">Nav</div>
      <div className="flex-1 bg-yellow-200 py-2 sm:py-4 sm:px-2">

      </div>
      <div className="flex-initial min-h-40 bg-red-300">Footer</div>
    </div>
  )
}

export default MainLayout;