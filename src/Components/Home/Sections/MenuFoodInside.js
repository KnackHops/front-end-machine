const MenuFoodInside = ({classCon, headerLabel, itemList}) => {
    return (
        <div className={classCon}>
            <h3>{headerLabel}</h3>
             <ul>
            {   itemList.map( ( item, i ) => {
                return (
                        <li className="parent_list" key={item.label + i}>
                            {
                                item?.price ? 
                                <p className="fd">
                                    <span>
                                        { item.label }
                                    </span>
                                    <span> { item.price } </span>
                                </p>
                                 :
                                 <>
                                    <p>
                                        { item.label }
                                    </p>
                                    <ul>
                                        {
                                            item.priceList.map ( ( item, i ) => {
                                                return (
                                                    <li className="child_list">
                                                        <p className="fd">
                                                            <span>
                                                                { item.label }
                                                            </span>
                                                            <span>
                                                                { item.price }
                                                            </span>
                                                        </p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                 </>
                            }
                        </li>
                )
                })
            }
            </ul>    
        </div> 
    )
}

export default MenuFoodInside;