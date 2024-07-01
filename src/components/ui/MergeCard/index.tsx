import React from "react";
import Image from "next/image";
import SwapIcon from "@/assets/img/swap.svg";
import PerlIcon from "@/assets/img/tokens/perl.png";
import BloodIcon from "@/assets/img/tokens/blood.png";
import { Button } from "@/components";

export const MergeCard = () => {
  return (
    <div className="card bg-card p-5 w-full md:w-[510px] flex flex-col items-center gap-5">
      <div className="flex items-center justify-between w-full">
        <div className="card flex items-center px-4 py-3 w-40 bg-vampire-light2 gap-3">
          <Image src={PerlIcon} alt="token1" className="rounded w-[38px]" />
          <p className="flex-1 font-semibold text-center">1 PERL</p>
        </div>
        <Image src={SwapIcon} alt="swap" className="cursor-pointer" />
        <div className="card flex items-center px-4 py-3 w-40 bg-vampire-light2 gap-3">
          <Image src={BloodIcon} alt="token1" className="rounded w-[38px]" />
          <p className="flex-1 font-semibold text-center">1 BLOOD</p>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div>
          <div className="text-sm font-medium">Wallet Balance</div>
          <div className="pt-1 font-bold flex items-end">
            <p className="text-xl">2,382.09</p>
            &nbsp;
            <p>PERL</p>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium">Conversion rate</div>
          <div className="pt-1 font-bold text-xl">1 PERL = 1 BLOOD</div>
        </div>
      </div>

      <hr className="w-full border-gray-700" />

      <div className="flex justify-between w-full">
        <div>
          <div className="font-medium">Status</div>
          <div className="pt-1 font-bold text-xl text-neutral-300">Pending</div>
        </div>
        <div>
          <div className="font-medium">Deposited</div>
          <div className="pt-1 font-bold text-xl">-</div>
        </div>
        <div>
          <div className="font-medium">Countdown</div>
          <div className="pt-1 font-bold text-xl">-</div>
        </div>
      </div>

      <Button>Deposit</Button>
    </div>
  );
};
