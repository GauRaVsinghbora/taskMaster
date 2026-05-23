import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export const metadata = {
title: "Mini Task Dashboard",
description: "Task management dashboard"
};

export default function RootLayout({ children }) {

return (

<html lang="en">

<body className="min-h-screen flex flex-col">

<Navbar/>

<main className="flex-grow">

{children}

</main>

<Footer/>

</body>

</html>

)

}