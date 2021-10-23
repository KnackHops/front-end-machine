const MenuFoodInside = ({classCon, headerLabel, itemList}) => {
    return (
        <div className={classCon}>
                        <h3>{headerLabel}</h3>
                        <ul>
                            {   itemList.map( ( item, i ) => {
                                    return (
                                        <li className="fd" key={item.label + i}>
                                            <span>
                                                {item.label}
                                            </span>
                                            <span>
                                                {item.price}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>    
                    </div> 
    )
}

export default MenuFoodInside;