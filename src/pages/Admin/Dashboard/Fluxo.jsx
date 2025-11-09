
// import React, { useState } from "react";
// import SidebarMenu from "../../../Components/Admin/SidebarMenu";
// import data from "./fluxoData";
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from "recharts";

// const columns = [
//   { label: "Data", key: "name" },
//   { label: "Valor (R$)", key: "valor" },
// ];

// export default function FluxoPage() {
//   const [filtro, setFiltro] = useState("todos");

//   const filtrar = (arr) => {
//     if (filtro === "positivos") return arr.filter((d) => d.valor > 0);
//     if (filtro === "negativos") return arr.filter((d) => d.valor < 0);
//     return arr;
//   };
//   const dadosFiltrados = filtrar(data);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white">
//       <SidebarMenu />
//       <div className="flex-1 p-6">
//         <h1 className="text-2xl font-bold mb-4">Fluxo de Caixa</h1>
//         <div className="mb-4 flex gap-2">
//           <button onClick={() => setFiltro("todos")} className={`px-4 py-2 rounded ${filtro === "todos" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>Todos</button>
//           <button onClick={() => setFiltro("positivos")} className={`px-4 py-2 rounded ${filtro === "positivos" ? "bg-green-600 text-white" : "bg-gray-200"}`}>Apenas Entradas</button>
//           <button onClick={() => setFiltro("negativos")} className={`px-4 py-2 rounded ${filtro === "negativos" ? "bg-red-600 text-white" : "bg-gray-200"}`}>Apenas Saídas</button>
//         </div>
//         {/* Gráfico */}
//         <div className="w-full h-64 bg-white rounded shadow mb-6 p-4">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={dadosFiltrados}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip formatter={(v) => `R$ ${v}`} />
//               <Legend />
//               <Bar dataKey="valor" fill="#3450edff" isAnimationActive />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         {/* Grid de transações */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded shadow">
//             <thead>
//               <tr>
//                 {columns.map((col) => (
//                   <th key={col.key} className="px-4 py-2 border-b font-semibold text-left">{col.label}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {dadosFiltrados.map((row, idx) => (
//                 <tr key={idx} className={row.valor < 0 ? "bg-red-50" : "bg-green-50"}>
//                   <td className="px-4 py-2 border-b">{row.name}</td>
//                   <td className={`px-4 py-2 border-b font-bold ${row.valor < 0 ? "text-red-600" : "text-green-600"}`}>{row.valor < 0 ? "-" : "+"}R$ {Math.abs(row.valor)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
