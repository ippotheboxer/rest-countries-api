import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CountryFullSkeleton: React.FC = () => {
  return (
    <div className="mt-10 px-5 md:px-10 xl:px-20">
      <button className="mb-8 text-sm flex flex-row shadow bgElement rounded-md p-3 px-10 items-center justify-center">
        <Skeleton width={100} height={20} />
      </button>

      <div className="flex flex-col lg:flex-row lg:justify-start justify-center lg:items-start pt-4 lg:pt-12">
        <Skeleton width={600} height={300} className="rounded-md" />

        <div className="flex flex-col items-start justify-center md:pl-10">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold pb-6 mt-5 lg:mt-10">
            <Skeleton width={200} />
          </h2>

          <div>
            <div className="flex flex-col lg:flex-row">
              <div>
                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={150} />
                </p>

                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={100} />
                </p>

                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={100} />
                </p>

                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={100} />
                </p>

                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={100} />
                </p>
              </div>

              <div className="mt-4 lg:mt-0 ml-0 lg:ml-32 xl:ml-40 2xl:ml-60">
                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={100} />
                </p>

                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={150} />
                </p>

                <p className="text-sm md:text-base font-semibold infoP">
                  <Skeleton width={150} />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:flex-row lg:items-center lg:mt-24 pt-4">
            <p className="text-sm md:text-base font-semibold lg:mr-2 pb-4 lg:pb-0">
              <Skeleton width={120} />
            </p>
            <Skeleton width={200} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryFullSkeleton;
