import NavTab from '../NavTab'
import './index.css'

const NavBar = ({activeCatId, tableMenuList, setActiveCat}) => (
  <ul className="nav-container d-flex align-items-center m-0 p-2">
    {tableMenuList.map(eachCat => (
      <NavTab
        key={eachCat.menuCategoryId}
        activeCatId={activeCatId}
        category={eachCat}
        setActiveCat={setActiveCat}
      />
    ))}
  </ul>
)

export default NavBar
