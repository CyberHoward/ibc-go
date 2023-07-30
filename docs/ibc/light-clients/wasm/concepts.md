<!--
order: 2
-->

# Concepts

Learn about the differences between a proxy light client and a Wasm light client. {synopsis}

## Proxy light client

The `08-wasm` module is not a regular light client in the same sense as, for example, the 07-tendermint light client. `08-wasm` is instead a *proxy* light client module, and this means that the module acts a proxy to the actual implementations of light clients. The module will interface with the actual light clients uploaded as Wasm bytecode and will delegate all operations to them (i.e. `08-wasm` just passes through the requests to the Wasm light clients). Still, the `08-wasm` module implements all the required interfaces necessary to integrate with core IBC, so that 02-client can call into it as it would for any other light client module. These interfaces are `ClientState`, `ConsensusState` and `ClientMessage`, and we will describe them in the context of `08-wasm` in the following sections. For more information about this set of interfaces, please read section [Overview of the light client module developer guide](../overview.md#overview).

### `ClientState`

The `08-wasm`'s `ClientState` data structure maintains three fields:

- `Data` contains the bytes of the Protobuf-encoded client state of the underlying light client implemented as a Wasm contract. For example, if the light client Wasm contract implements the Tendermint light client algorithm, then `Data` will contain the bytes for a [Tendermint client state](https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/light-clients/07-tendermint/tendermint.pb.go#L36-L66).
- `CodeHash` is the sha256 hash of the Wasm contract's bytecode. This hash is used as an identifier to call the right contract.
- `LatestHeight` is the latest height of the counterparty state machine (i.e. the height of the blockchain), whose consensus state the light client tracks.

```go
type ClientState struct {
  // bytes encoding the client state of the underlying 
  // light client implemented as a Wasm contract
  Data         []byte
  // sha256 hash of Wasm contract bytecode
  CodeHash     []byte
  // latest height of the counterparty ledger
  LatestHeight types.Height
}
```

See section [`ClientState` of the light client module developer guide](../overview.md#clientstate) for more information about the `ClientState` interface.

### `ConsensusState`

The `08-wasm`'s `ConsensusState` data structure maintains one field:

- `Data` contains the bytes of the Protobuf-encoded consensus state of the underlying light client implemented as a Wasm contract. For example, if the light client Wasm contract implements the Tendermint light client algorithm, then `Data` will contain the bytes for a [Tendermint consensus state](https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/light-clients/07-tendermint/tendermint.pb.go#L101-L109).

```go
type ConsensusState struct {
  // bytes encoding the consensus state of the underlying light client
  // implemented as a Wasm contract.
  Data []byte
}
```

See section [`ConsensusState` of the light client module developer guide](../overview.md#consensusstate) for more information about the `ConsensusState` interface.

### `ClientMessage`

`ClientMessage` is used for performing updates to a `ClientState` stored on chain. The `08-wasm`'s `ClientMessage` data structure maintains one field:

- `Data` contains the bytes of the Protobuf-encoded header(s) or misbehaviour for the underlying light client implemented as a Wasm contract. For example, if the light client Wasm contract implements the Tendermint light client algorithm, then `Data` will contain the bytes of either [header](https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/light-clients/07-tendermint/tendermint.pb.go#L186-L203) or [misbehaviour](https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/light-clients/07-tendermint/tendermint.pb.go#L144-L151) for a Tendermint light client.

```go
type ClientMessage struct {
  // bytes encoding the header(s) or misbehaviour for the underlying light client
  // implemented as a Wasm contract.
  Data []byte
}
```

See section [`ClientMessage` of the light client module developer guide](../overview.md#clientmessage) for more information about the `ClientMessage` interface.

## Wasm light client

The actual light client can be implemented in any language that compiles to Wasm and implements the interfaces of a [CosmWasm](https://docs.cosmwasm.com/docs/) contract. Even though in theory other languages could be used, in practic (at least for the time being) the most suitable language to use would be Rust, since there is already good support for it for developing CosmWasm smart contracts.

At the moment of writting there are two contracts available: one for [Tendermint](https://github.com/ComposableFi/centauri/tree/master/light-clients/ics07-tendermint-cw) and one [Grandpa](https://github.com/ComposableFi/centauri/tree/master/light-clients/ics10-grandpa-cw) (which is being used in production in Composable Finance's Centauri bridge). And there are others in development (e.g. for Near).