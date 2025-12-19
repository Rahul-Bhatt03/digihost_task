import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home=lazy(()=>import('../pages/HomePage').then(module=>({default:module.HomePage})))

const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
);

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Home />
                    </Suspense>
                )
            },
          
           
        ]
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}