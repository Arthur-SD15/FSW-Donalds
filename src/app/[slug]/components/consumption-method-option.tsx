import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IConsumptionMethodOptionProps {
    slug: string;
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    option: string;
}

const ConsumptionMethodOption = ({slug, imageUrl, imageAlt, buttonText, option}: IConsumptionMethodOptionProps) => {
    return (
        <Card>
            <CardContent className="flex flex-col items-center gap-8 py-8">
                <div className="relative h-[80px] w-[80px]">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                    />
                </div>
                <Button variant="secondary" className="rounded-full" asChild>
                    <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
                        {buttonText}
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}

export default ConsumptionMethodOption
