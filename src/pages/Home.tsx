import { useEffect, useState } from "react";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { theme1 } from "../themes/theme1";
import { theme2 } from "../themes/theme2";
import { theme3 } from "../themes/theme3";

const Home = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const themeMap = {
        theme1,
        theme2,
        theme3,
    };
    const currentTheme = useSelector(
        (state: RootState) => state.theme.currentTheme
    );
    const theme = themeMap[currentTheme];

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Home Page</h2>
            <div className={`flex justify-center`}>
                <p className={`border w-100 h-10 rounded flex justify-center items-center m-4 ${theme.bgColor} ${theme.textColor}`}>Products list</p>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <img src={product.image} alt={product.title} className="h-32 mx-auto" />
                        <h3 className="font-bold mt-2">{product.title}</h3>
                        <p>{'$' + product.price}</p>
                        <button className={`border px-4 py-2 rounded ${theme.bgColor} ${theme.textColor} mb-6`}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
