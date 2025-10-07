// "use client";

// import {
//     Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
// } from "@/components/ui/card"
// import { Globe, CreditCard, Briefcase, MapPin } from "lucide-react";

// export default function QuickAccess() {
//   const items = [
//     { title: "Open Account", icon: CreditCard, link: "/open-account" },
//     { title: "Internet Banking", icon: Globe, link: "/internet-banking" },
//     { title: "Apply for Loan", icon: Briefcase, link: "/loans" },
//     { title: "Find Branch", icon: MapPin, link: "/resources/branch-locator" },
//   ];

//   return (
//     <div className="relative z-30">
//       <div className="max-w-6xl mx-auto -mt-16 px-4 md:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           {items.map((item) => (
//             <a key={item.title} href={item.link}>
//               <Card className="hover:shadow-md transition-shadow bg-white/90 backdrop-blur-sm border border-[#eee]">
//                 <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
//                   <item.icon className="w-8 h-8 text-[#001f3f]" />
//                   <h3 className="font-semibold text-gray-800 text-sm md:text-base">
//                     {item.title}
//                   </h3>
//                   <div className="h-[2px] w-0 bg-gradient-to-r from-[#001f3f] via-[#ab9450] to-[#d32f2f] transition-all duration-300 group-hover:w-8" />
//                 </CardContent>
//               </Card>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }