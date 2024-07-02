import { MergeCard } from "@/components";
import { MergeStatus } from "@/types";
import { Text, Title } from "@mantine/core";
import React from "react";

export default async function MergePage() {
  return (
    <div className="flex flex-col items-center w-full md:w-[486px] lg:w-[992px]">
      <div className="bg-vampire-light card px-5 py-2 w-full">
        <Title order={1} tt="uppercase">
          Merge now
        </Title>
        <Text size="md" className="!pt-4">
          Deposit your tokens to convert them into $BLOOD at the end of the
          countdown period. All $BLOOD will be vested at a rate of ______
        </Text>
      </div>

      <div className="flex flex-wrap lg:grid-cols-2 mt-5 gap-5">
        <MergeCard />
        <MergeCard status={MergeStatus.Deposit} />
        <MergeCard status={MergeStatus.Cliff} />
        <MergeCard status={MergeStatus.Vesting} />
        <MergeCard />
      </div>
    </div>
  );
}
