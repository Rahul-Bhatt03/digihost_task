interface MenuItem {
  title: string;
  image: string;
  alt: string;
}

interface MegaMenuData {
  title: string;
  description: string;
  items: MenuItem[];
}

interface MegaMenuContainerProps {
  data: MegaMenuData;
}


export const MegaMenuContainer = ({ data }:MegaMenuContainerProps) => {
    return (
        <div className="absolute left-0 right-0 top-full mt-0 bg-white shadow-2xl border-t border-gray-100 z-50">
            <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="grid grid-cols-12 gap-8">
                 
                    <div className="col-span-3">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            {data.title}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                   
                    <div className="col-span-9">
                        <div className="overflow-x-auto pb-4">
                            <div className="flex gap-6 min-w-max">
                                {data.items.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="group cursor-pointer flex-shrink-0 w-64"
                                    >
                                        <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3 bg-gray-100">
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-amber-700 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};