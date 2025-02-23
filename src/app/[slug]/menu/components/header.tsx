"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface IRestaurantHeaderProps {
    restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({restaurant}: IRestaurantHeaderProps) => {
    const router = useRouter();
    

    const handleBackClick = () => {
        router.back();
    }

    return (
        <div className="relative h-[250px] w-full">
            <Button 
                className="absolute top-4 left-4 z-50 rounded-full" 
                size="icon"
                variant="secondary"
                onClick={handleBackClick}
            >
                <ChevronLeftIcon />
            </Button>
            <Image 
                src={restaurant.coverImageUrl} 
                alt={restaurant.name} 
                fill 
                className="object-cover" 
            />
            <Button 
                className="absolute top-4 right-4 z-50 rounded-full" 
                size="icon"
                variant="secondary"
            >
                <ScrollTextIcon />
            </Button>
        </div>
    );
}

export default RestaurantHeader;
