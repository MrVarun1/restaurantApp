const formatRestaurantData = rawData => {
  if (!rawData || rawData.length === 0) {
    return {details: {}, menuList: []}
  }

  const rawRestaurant = rawData[0]

  const details = {
    restaurantId: rawRestaurant?.restaurant_id ?? '',
    restaurantName: rawRestaurant?.restaurant_name ?? '',
    restaurantImage: rawRestaurant?.restaurant_image ?? '',
    tableId: rawRestaurant?.table_id ?? '',
    tableName: rawRestaurant?.table_name ?? '',
    branchName: rawRestaurant?.branch_name ?? '',
    nexturl: rawRestaurant?.nexturl ?? '',
  }

  const menuList =
    rawRestaurant?.table_menu_list?.map(eachCat => ({
      menuCategory: eachCat?.menu_category ?? '',
      menuCategoryId: eachCat?.menu_category_id ?? '',
      menuCategoryImage: eachCat?.menu_category_image ?? '',
      nexturl: eachCat?.nexturl ?? '',
      categoryDishes:
        eachCat?.category_dishes?.map(dish => ({
          dishId: dish?.dish_id ?? '',
          dishName: dish?.dish_name ?? '',
          dishPrice: dish?.dish_price ?? 0,
          dishImage: dish?.dish_image ?? '',
          dishCurrency: dish?.dish_currency ?? '',
          dishCalories: dish?.dish_calories ?? 0,
          dishDescription: dish?.dish_description ?? '',
          dishAvailability: dish?.dish_Availability ?? false,
          dishType: dish?.dish_Type ?? 0,
          nexturl: dish?.nexturl ?? '',
          addonCategories:
            dish?.addonCat?.map(addonCat => ({
              addonCategory: addonCat?.addon_category ?? '',
              addonCategoryId: addonCat?.addon_category_id ?? '',
              addonSelection: addonCat?.addon_selection ?? 0,
              nexturl: addonCat?.nexturl ?? '',
              addons:
                addonCat?.addons?.map(addon => ({
                  dishId: addon?.dish_id ?? '',
                  dishName: addon?.dish_name ?? '',
                  dishPrice: addon?.dish_price ?? 0,
                  dishImage: addon?.dish_image ?? '',
                  dishCurrency: addon?.dish_currency ?? '',
                  dishCalories: addon?.dish_calories ?? 0,
                  dishDescription: addon?.dish_description ?? '',
                  dishAvailability: addon?.dish_Availability ?? false,
                  dishType: addon?.dish_Type ?? 0,
                })) ?? [],
            })) ?? [],
        })) ?? [],
    })) ?? []

  return {details, menuList}
}

export default formatRestaurantData
