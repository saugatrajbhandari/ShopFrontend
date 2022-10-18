import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const AboutProductSkeleton = () => {
  return (
    <div className="md:flex ml-2 md:ml-0">
      <div className="w-[100%] max-w-[250px]">
        <Skeleton className="aspect-[1/1.40] rounded-r-md" />
      </div>
      <div className="max-w-[500px] mt-3 md:mt-0 md:ml-5">
        <h2 className="main-header w-[250px] md:w-[350px]">
          <Skeleton />
        </h2>
        <p className="md:mt-2 w-[150px] font-regular">
          <Skeleton />
        </p>
      </div>
    </div>
  );
};

export default AboutProductSkeleton;
