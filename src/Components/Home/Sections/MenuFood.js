import './MenuFood.css';
import MenuFoodInside from './MenuFoodInside';

const MenuFood = ( { menuClassChange } ) => {
    const pancitList = [
        {
            label: "Batil Patong",
            priceList: [
                {
                    label: "Regular",
                    price: "60"
                },
                {
                    label: "Special",
                    price: "80"
                },
                {
                    label: "Jumbo",
                    price: "100"
                },
                {
                    label: "Overload",
                    price: "150"
                },
            ]
        },
        {
            label: "Lomi",
            priceList: [
                {
                    label: "Regular",
                    price: "60"
                },
                {
                    label: "Overload",
                    price: "120"
                },
            ]
        },
        {
            label: "Pancit Concha",
            priceList: [
                {
                    label: "Regular",
                    price: "60"
                },
                {
                    label: "Special",
                    price: "80"
                },
            ]
        },
        {
            label: "Mami",
            price: "60"
        },
        {
            label: "Pancit Sisig",
            price: "100"
        }
    ]

    const bilaoList = [
        {
            label: "Bilao Batil Patong",
            priceList: [
                {
                    label: "Small",
                    price: "330"
                },
                {
                    label: "Medium",
                    price: "530"
                },
                {
                    label: "Large",
                    price: "1030"
                },
            ]
        }
    ]

    const sideFoodList = [
        {
            label: "Lumpia",
            price: "5"
        },
        {
            label: "Buko Halo-Halo",
            price: "60"
        }
    ]

    return (
        <section className="menufood_container">
            <div className={`universal-container ${menuClassChange}`}>
                <div className={`menufood_inside fd`}>
                    <h1>Menu</h1>
                    <MenuFoodInside classCon="pancit_container" headerLabel="Pancit" itemList={pancitList}/>
                    <MenuFoodInside classCon="bilao_container" headerLabel="Bilao" itemList={bilaoList} />
                    <MenuFoodInside classCon="sideFood_container" headerLabel="Side" itemList={sideFoodList} />
                </div>
            </div>
        </section>
    )
}

export default MenuFood;