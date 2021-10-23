import './MenuFood.css';
import MenuFoodInside from './MenuFoodInside';

const MenuFood = () => {
    const pancitList = [
        {
            label: "Batil Patong",
            price: "60"
        },
        {
            label: "Lomi",
            price: "60"
        },
        {
            label: "Mami",
            price: "60"
        },
        {
            label: "Pancit Concha",
            price: "60"
        },
        {
            label: "Pancit Sisig",
            price: "60"
        }
    ]

    const bilaoList = [
        {
            label: "Bilao Batil Patong",
            price: "60"
        },
        {
            label: "Bilao Concha",
            price: "60"
        },
        {
            label: "Bilao Pancit Sisig",
            price: "60"
        }
    ]

    const sideFoodList = [
        {
            label: "Lumpia",
            price: "60"
        },
        {
            label: "Buko Halo-Halo",
            price: "60"
        }
    ]

    return (
        <section className="menufood_container">
            <div className="universal-container">
                <div className="menufood_inside fd">
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