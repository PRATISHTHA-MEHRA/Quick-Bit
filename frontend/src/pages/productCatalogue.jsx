import { useEffect, useState } from 'react'
import supabase from "../supabaseClient.js"
import { motion } from 'framer-motion'



export default function ProductCatalogue() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
//     const fetchProducts = async () => {
//   console.log("Fetching products...");

//   const { data, error } = await supabase
//     .from("product_catalogue")
//     .select("*");

//   console.log("DATA:", data);
//   console.log("ERROR:", error);

//   setProducts(data || []);
//   setLoading(false);
// };

const fetchProducts = async () => {
const { data, error } = await supabase
.from('product_catalogue')
.select('product_name, category, conductor_material, conductor_size_sqmm, voltage_rating, core')
console.log("DATA FROM SUPABASE:", data);
console.log("ERROR:", error);


if (!error) setProducts(data)
setLoading(false)
}


fetchProducts()
}, [])

return (
<div className="p-6">
<motion.h1
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
className="text-3xl font-bold mb-6 text-center"
>
Product Catalogue
</motion.h1>


<div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
<table className="min-w-full bg-white">
<thead className="bg-gray-100">
<tr>
{[ 'Product Name', 'Category', 'Conductor Material', 'Conductor Size (sqmm)', 'Voltage Rating', 'Core' ].map((col) => (
<th key={col} className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
{col}
</th>
))}
</tr>
</thead>


<tbody>
{loading ? (
<tr>
<td colSpan="6" className="text-center py-6 text-gray-500">
Loading...
</td>
</tr>
) : (
products.map((item, index) => (
<motion.tr
key={index}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: index * 0.03 }}
className="hover:bg-gray-50 border-b"
>
<td className="px-6 py-3 text-sm">{item.product_name}</td>
<td className="px-6 py-3 text-sm">{item.category}</td>
<td className="px-6 py-3 text-sm">{item.conductor_material}</td>
<td className="px-6 py-3 text-sm">{item.conductor_size_sqmm}</td>
<td className="px-6 py-3 text-sm">{item.voltage_rating}</td>
<td className="px-6 py-3 text-sm">{item.core}</td>
</motion.tr>
))
)}
</tbody>
</table>
</div>
</div>
)
};

