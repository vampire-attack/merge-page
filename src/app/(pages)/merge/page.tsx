import { MergeCard } from "@/components";
import React from "react";

export default async function MergePage() {
  return (
    <div>
      <div className="bg-vampire-light card px-5 py-2">
        <div className="text-3xl font-medium uppercase">Merge Now</div>
        <div className="pt-4">
          Deposit your tokens to convert them into $BLOOD at the end of the
          countdown period. All $BLOOD will be vested at a rate of ______
        </div>
      </div>

      <div className="mt-5 flex">
        <MergeCard />
      </div>
    </div>
  );
}
