import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESSES } from "@/constants";
import { MergeABI } from "@/lib/abis";

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
