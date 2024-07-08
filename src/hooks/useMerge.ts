import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESSES } from "@/constants";
import { MergeABI } from "@/lib/abis";
import { MergeInfo } from "@/types";

export const useMergeAssetAddress = () => {
  const { data, isFetching } = useReadContract({
    abi: MergeABI,
    address: CONTRACT_ADDRESSES.merge,
    functionName: "mergeAsset",
    args: [],
  });

  return {
    data: data ?? "0x0",
    isFetching,
  };
};

export const useMergeInfo = (targetAsset: `0x${string}`) => {
  const { data, isFetching } = useReadContract({
    abi: MergeABI,
    address: CONTRACT_ADDRESSES.merge,
    functionName: "merges",
    args: [targetAsset],
  });

  return {
    data: data
      ? ({
          params: {
            targetAsset: data[0].targetAsset,
            swapRate: Number(data[0].swapRate),
            depositPeriod: Number(data[0].depositPeriod),
            mergeCliff: Number(data[0].mergeCliff),
            mergePeriod: Number(data[0].mergePeriod),
            startTimestamp: Number(data[0].startTimestamp),
          },
          allocatedAmount: data[1],
          availableAmount: data[2],
          claimedAmount: data[3],
          depositedAmount: data[4],
          targetWithdrawn: data[5],
          withdrawnAfterDeposit: data[6],
          withdrawnAfterMerge: data[7],
        } as MergeInfo)
      : undefined,
    isFetching,
  };
};

export const useVestedAmount = (
  targetAsset: `0x${string}`,
  userAddress: `0x${string}`
) => {
  const { data, isFetching } = useReadContract({
    abi: MergeABI,
    address: CONTRACT_ADDRESSES.merge,
    functionName: "vested",
    args: [targetAsset, userAddress],
  });

  return {
    data: data ?? 0n,
    isFetching,
  };
};

export const useReleasedAmount = (
  targetAsset: `0x${string}`,
  userAddress: `0x${string}`
) => {
  const { data, isFetching } = useReadContract({
    abi: MergeABI,
    address: CONTRACT_ADDRESSES.merge,
    functionName: "released",
    args: [targetAsset, userAddress],
  });

  return {
    data: data ?? 0n,
    isFetching,
  };
};
