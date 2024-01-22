import { pathConstants } from "@/routes/pathContants";
import Link from "next/link";

const BrandLogo = () => {
    return (
        <Link
            href={pathConstants.HOME.path}
            className="text-primary font-bold text-1.25 hover:text-primary-600">
            CardGen
        </Link>
    );
};

export default BrandLogo;
