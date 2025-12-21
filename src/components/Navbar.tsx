import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../assets/f713dc9bc433ecc1a70363e4ff0e53ad77120b6a.png"
import { useState } from "react";
import { MegaMenuContainer } from "./MegaMenuContainer";
import bottle from "../assets/theme1bottle.png"
import bottle2 from "../assets/theme2bottle.png"
import bottle3 from "../assets/theme3bottle.png"

export const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { key: 'about', label: 'About' },
        { key: 'products', label: 'Products' },
        { key: 'distilleries', label: 'Distilleries' },
        { key: 'investors', label: 'Investors' },
        { key: 'socialResponsibility', label: 'Social Responsibility' },
        { key: 'contact', label: 'Contact' }
    ];

 const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
            setActiveMenu(null);
        } else {
            setMenuOpen(true);
        }
    }

    const handleNavClick = (key) => {
        if (menuData[key]) {
            setActiveMenu(activeMenu === key ? null : key);
        } else {
            setActiveMenu(null);
        }
    }

    const menuData = {
        about: null,
        products: {
            title: "Products",
            description: "Our diverse range of premium alcohol products crafted with quality and heritage.",
            items: [
                {
                    title: "Oakton Barral Aged Grain Whiskey",
                    image: bottle,
                    alt: "Whiskey bottles"
                },
                {
                    title: " Dooab Vodka",
                    image: bottle2,
                    alt: "Vodka bottles"
                },
                {
                    title: " Steven Heaven Rum",
                    image: bottle3,
                    alt: "Rum bottles"
                },
                {
                    title: "Terai Dry Gin",
                    image: bottle2,
                    alt: "Gin bottles"
                },
            ]
        },
        distilleries: {
            title: "Distilleries",
            description: "Combined together with the experience of our leadership team, we can state proudly that our ability to run distilleries in India is unparalleled.",
            items: [
                {
                    title: "Samalkha, Haryana",
                    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
                    alt: "Bottling line"
                },
                {
                    title: "Behror, Rajasthan",
                    image: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?w=400&h=300&fit=crop",
                    alt: "Wooden barrels"
                },
                {
                    title: "Baharagora, Jharkhand",
                    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
                    alt: "Copper stills"
                },
                {
                    title: "Dhandua, Bihar",
                    image: "https://images.unsplash.com/photo-1504279807946-8f7eb54aad09?w=400&h=300&fit=crop",
                    alt: "Distillery interior"
                }
            ]
        },
        investors: null,
        socialResponsibility: {
            title: "Social Responsibility",
            description: "Paying our privilege forward and paving the way for stronger communities has always been a core value.",
            items: [
                {
                    title: "GSL Gram Vikas",
                    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                    alt: "Community hands"
                },
                {
                    title: "IPS Foundation",
                    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
                    alt: "Red heart hands"
                },
                {
                    title: "GRAS Academy",
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
                    alt: "Business meeting"
                },
                {
                    title: "InShakti",
                    image: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=400&h=300&fit=crop",
                    alt: "Coffee beans"
                }
            ]
        },
        contact: null
    };

    return (
        <nav
            className={`w-full px-6 py-4 flex items-center justify-between relative z-50 transition-colors duration-300 ${menuOpen || activeMenu ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="flex items-center gap-2 lg:translate-x-60">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-10 md:h-16 lg:h-20 w-50 object-contain"
                />
            </div>

            {menuOpen && (
                <div
                    className="
                        absolute top-full left-0 right-0
                        bg-white
                        max-h-[70vh]
                        overflow-y-auto
                        flex flex-col
                        items-center
                        gap-6
                        py-6
                        lg:flex-row
                        lg:static
                        lg:bg-transparent
                        lg:max-h-none
                        lg:overflow-visible
                        lg:py-0
                        lg:translate-x-10
                    "
                >
                    {navItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleNavClick(item.key)}
                            className={`text-base font-medium transition-colors whitespace-nowrap ${activeMenu === item.key
                                    ? "text-amber-700"
                                    : "text-gray-700 hover:text-amber-700 lg:text-black"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}

            <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:-translate-x-60"
                onClick={toggleMenu}
            >
                {menuOpen ? (
                    <XMarkIcon className="h-7 w-7 md:h-8 md:w-8 text-gray-700 lg:text-gray-700" />
                ) : (
                    <Bars3Icon className="h-7 w-7 md:h-8 md:w-8 text-white lg:text-white" />
                )}
            </button>

            {activeMenu && menuData[activeMenu] && (
                <div className="absolute top-full left-0 right-0 bg-white mt-0 lg:mt-0">
                    <MegaMenuContainer data={menuData[activeMenu]} />
                </div>
            )}
        </nav>
    );
};