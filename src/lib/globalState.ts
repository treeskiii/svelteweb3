export const ssr = false;
import type { BigNumber } from 'ethers';
import { Sync, Trigger } from 'ether-state';
import { IMulticall } from '$lib/state/contracts';
import { balanceOnBlock } from "$lib/stores/state";
import { NETWORKS } from '$lib/config';
import { networkProviders, walletAddress } from '$lib/stores/provider';

// Mainnet Syncs
new Sync([
  {
    trigger: Trigger.BLOCK,
    input: () => ['0x5d4444E6DC0e9E107b793b3DaAcD677551e0E1B1'],
    output: (value: [BigNumber]) => balanceOnBlock.set(value[0]),
    call: {
      target: () => NETWORKS[0].multicall2Address,
      interface: IMulticall,
      selector: 'getEthBalance'
    }
  }
], networkProviders[String(NETWORKS[0].chainId)])
