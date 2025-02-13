import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'

import formatRestaurantData from '../../utilities/formatRestaurantData'
import Header from '../Header'

import './index.css'
import NavBar from '../NavBar'
import MenuContainer from '../MenuContainer'

const statusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILUER',
}

const Home = () => {
  const [activeCatId, setActiveCat] = useState(null)
  const [pageStatus, setPageStatus] = useState(statusConstants.initial)
  const [data, setData] = useState({restaurantDetails: {}, tableMenuList: []})
  const {restaurantDetails, tableMenuList} = data
  const URL = process.env.REACT_APP_API_URL

  const fetchDataFun = async url => {
    try {
      setPageStatus(statusConstants.loading)
      const fetchedData = await fetch(url)
      if (fetchedData.ok) {
        const jsonData = await fetchedData.json()
        const {details, menuList} = formatRestaurantData(jsonData)
        setData({restaurantDetails: details, tableMenuList: menuList})
        setActiveCat(menuList[0].menuCategoryId)
        setPageStatus(statusConstants.success)
      } else {
        setPageStatus(statusConstants.failure)
        console.log('API call failed')
      }
    } catch (e) {
      console.log('API call ERROR:', e)
      setPageStatus(statusConstants.failure)
    }
  }

  useEffect(
    () => fetchDataFun(URL),
    // eslint-disable-next-line
    [URL],
  )

  const renderSuccessView = () => {
    const activeCategory = tableMenuList.filter(
      eachCat => activeCatId === eachCat.menuCategoryId,
    )[0]

    return (
      <>
        <Header restaurantDetails={restaurantDetails} />
        <NavBar
          activeCatId={activeCatId}
          tableMenuList={tableMenuList}
          setActiveCat={setActiveCat}
        />
        <MenuContainer activeCategory={activeCategory} />
      </>
    )
  }

  const renderBody = () => {
    switch (pageStatus) {
      case statusConstants.loading:
        return (
          <div className="loader-container d-flex justify-content-center align-items-center">
            <Loader type="Oval" />
          </div>
        )
      case statusConstants.success:
        return renderSuccessView()
      case statusConstants.failure:
        return renderSuccessView()
      default:
        return null
    }
  }

  return <div className="home-container">{renderBody()}</div>
}

export default Home
