<!--
order: 1
-->

# `08-wasm`

## Overview

Learn about the `08-wasm` light client proxy module. {synopsis}

### Context

Traditionally, light clients used by ibc-go have been implemented in Go, and since ibc-go v7 (with the release of the 02-client refactor), they are [first-class Cosmos SDK modules](../../../architecture/adr-010-light-clients-as-sdk-modules.md). This means that upgrading existing light client implementations or adding support for new light clients is a multi-step, time-consuming process involving on-chain governance: it is necessary to modify the codebase of ibc-go (if the light client is part of its codebase), re-build chains' binaries, pass a governance proposal and validators upgrade their nodes.

Another problem stemming from the above process is that if a chain wants to upgrade its own consensus, it will need to convince every chain connected to it to upgrade its light client in order to stay connected, going through the on-chain governance process mentioned before. Due to the time consuming process required to upgrade a light client, a chain with lots of connections needs to be disconnected from its counterparties for a non-negligible amount of time after upgrading its consensus, which can be very expensive in terms of time and effort.

### Motivation

To remedy this, the `08-wasm` module makes adding support for new light clients or upgrading existing light client implementations a simple governance-gated transaction. The light client bytecode is written in a Wasm-compilable language, implements the entry points of a [CosmWasm](https://docs.cosmwasm.com/docs/) smart contract, and runs inside a Wasm VM. The `08-wasm` module exposes a proxy light client interface that routes incoming messages to the appropriate handler function, inside the Wasm VM, for execution.

Adding a new light client to a chain is just as simple as submitting a governance proposal with the message that stores the bytecode of the light client contract. No coordinated upgrade is needed. When the governance proposal passes and the message is executed, the contract is ready to be instantiated upon receiving a relayer-submitted `MsgCreateClient`. The process of creating a Wasm light client is the same as with regular light client implemented in Go.

If a chain decides to upgrade its own consensus, counterparty chains can simply upload (e.g. via governance) a new version of the Wasm light client contract that supports the upgraded consensus. When the chain halts, relayers can submit to all counterparty chains the upgraded client state (and a proof that the chain committed to it). The upgraded client state will contain the identifier (i.e. code hash) of the new Wasm light client contract, so that after updating, all messages will be routed to the new Wasm light client contract.

### Use cases

- Easier upgrading of consensus-breaking changes: as mentioned above, when a chain plans to upgrade its consensus algorithm, counterparty chains do not need to do a coordinated upgrade to upgrade their chain binaries with a new version of the light client algorithm implementation. Chains can just upload (e.g. via governance) a new contract that supports the upgraded light client algorithm and the chain upgrades, the counterparties will switch to using the new contract.
- Development of light clients for non-Cosmos ecosystem chains: state machines in other ecosystems are implemented in many cases in Rust, and thus there are probably libraries used in their light client implementations for which there is no equivalent in Go. This makes very difficult the development of a light client in Go, but relatively simple to do it in Rust. Therefore, writing a CosmWasm smart contract in Rust that implements the light client algorithm becomes a lower effort.