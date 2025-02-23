import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantHeader from "./components/header";

interface IRestaurantMenuPageProps {
    params: Promise<{slug: string}>
    searchParams: Promise<{consumptionMethod: string}>
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
    return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
}

const RestaurantMenuPage = async ({params, searchParams}: IRestaurantMenuPageProps) => {
    const {slug} = await params;
    const {consumptionMethod} = await searchParams;

    const restaurant = await db.restaurant.findUnique({
        where: {slug},
        include: {
            menuCategories: {
                include: {
                    products: true
                }
            }

        }
    });

    if(!restaurant || !isConsumptionMethodValid(consumptionMethod)){
        return notFound();
    }

    return (
        <div>
            <RestaurantHeader
                restaurant={restaurant}
            />
        </div>
    );
};

export default RestaurantMenuPage;
