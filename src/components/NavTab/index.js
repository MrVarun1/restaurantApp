import './index.css'

const NavTab = ({activeCatId, category, setActiveCat}) => {
  const {menuCategory, menuCategoryId} = category
  const highlight = activeCatId === menuCategoryId ? 'highlight' : ''

  return (
    <li
      className={`nav-item-container mx-2 d-flex align-items-center justify-content-center ${highlight}`}
      onClick={() => setActiveCat(menuCategoryId)}
    >
      <button type="button" className="btn">
        {menuCategory}
      </button>
    </li>
  )
}

export default NavTab
