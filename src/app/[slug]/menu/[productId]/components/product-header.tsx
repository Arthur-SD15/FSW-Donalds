"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface IProductHeaderProps {
    product: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({product}: IProductHeaderProps) => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    }

    return (
        <div className="relative min-h-[300px] w-full">
                <Button 
                    className="absolute top-4 left-4 z-50 rounded-full" 
                    size="icon"
                    variant="secondary"
                    onClick={handleBackClick}
                >
                    <ChevronLeftIcon />
                </Button>
                <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        className="object-contain"
                />
                <Button 
                    className="absolute top-4 right-4 z-50 rounded-full" 
                    size="icon"
                    variant="secondary"
                >
                    <ScrollTextIcon />
                </Button>
            </div>
    )
}

export default ProductHeader;
