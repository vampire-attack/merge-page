"use client";

import React from "react";
import Image from "next/image";
import SwapIcon from "@/assets/img/swap.svg";
import PerlIcon from "@/assets/img/tokens/perl.png";
import BloodIcon from "@/assets/img/tokens/blood.png";
import InfoIcon from "@/assets/img/info.svg";
import { Button } from "@/components";
import { MergeStatus } from "@/types";
import { Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type MergeCardProps = {
  status?: MergeStatus;
};

const STATUS_COLORS = {
  [MergeStatus.Pending]: "#B5A3A3",
  [MergeStatus.Deposit]: "#05E278",
  [MergeStatus.Cliff]: "#EFAD2B",
  [MergeStatus.Vesting]: "#23DAE5",
};

export const MergeCard = ({ status = MergeStatus.Pending }: MergeCardProps) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div className="card bg-card p-5 w-full md:w-[486px] flex flex-col items-center gap-5">
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
          <div
            className="pt-1 font-bold text-xl"
            style={{ color: STATUS_COLORS[status] }}
          >
            {status.toString()}
          </div>
        </div>
        <div>
          <div className="font-medium">Deposited</div>
          <div className="pt-1 font-bold text-xl">-</div>
        </div>
        <div>
          <div className="font-medium flex items-center gap-1">
            <p>Countdown</p>
            <Popover width={228} position="bottom" withArrow opened={opened}>
              <Popover.Target>
                <Image
                  src={InfoIcon}
                  alt="info"
                  onMouseEnter={open}
                  onMouseLeave={close}
                />
              </Popover.Target>
              <Popover.Dropdown className="bg-vampire-light2 rounded-xl pointer-events-none p-4 flex flex-col items-center gap-3  text-white text-sm font-medium">
                <div className="w-full flex items-center justify-between">
                  <p>Deposit Period:</p>
                  <p>60 days</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p>Cliff Period:</p>
                  <p>3 months</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p>Vesting Period:</p>
                  <p>6 months</p>
                </div>
              </Popover.Dropdown>
            </Popover>
          </div>
          <div className="pt-1 font-bold text-xl">-</div>
        </div>
      </div>

      <Button>Deposit</Button>
    </div>
  );
};
