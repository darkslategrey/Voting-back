/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Voting {
  export type ProposalStruct = {
    description: PromiseOrValue<string>;
    voteCount: PromiseOrValue<BigNumberish>;
  };

  export type ProposalStructOutput = [string, BigNumber] & {
    description: string;
    voteCount: BigNumber;
  };

  export type VoterStruct = {
    isRegistered: PromiseOrValue<boolean>;
    hasVoted: PromiseOrValue<boolean>;
    votedProposalId: PromiseOrValue<BigNumberish>;
  };

  export type VoterStructOutput = [boolean, boolean, BigNumber] & {
    isRegistered: boolean;
    hasVoted: boolean;
    votedProposalId: BigNumber;
  };
}

export interface VotingInterface extends utils.Interface {
  functions: {
    "addProposal(string)": FunctionFragment;
    "addVoter(address)": FunctionFragment;
    "endProposalsRegistering()": FunctionFragment;
    "endVotingSession()": FunctionFragment;
    "getOneProposal(uint256)": FunctionFragment;
    "getVoter(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setVote(uint256)": FunctionFragment;
    "startProposalsRegistering()": FunctionFragment;
    "startVotingSession()": FunctionFragment;
    "tallyVotes()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "winningProposalID()": FunctionFragment;
    "workflowStatus()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addProposal"
      | "addVoter"
      | "endProposalsRegistering"
      | "endVotingSession"
      | "getOneProposal"
      | "getVoter"
      | "owner"
      | "renounceOwnership"
      | "setVote"
      | "startProposalsRegistering"
      | "startVotingSession"
      | "tallyVotes"
      | "transferOwnership"
      | "winningProposalID"
      | "workflowStatus"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addProposal",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addVoter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "endProposalsRegistering",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endVotingSession",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOneProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVoter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVote",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startProposalsRegistering",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startVotingSession",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tallyVotes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "winningProposalID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "workflowStatus",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addVoter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endProposalsRegistering",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endVotingSession",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOneProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVoter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startProposalsRegistering",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startVotingSession",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tallyVotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "winningProposalID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workflowStatus",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ProposalRegistered(uint256)": EventFragment;
    "Voted(address,uint256)": EventFragment;
    "VoterRegistered(address)": EventFragment;
    "WorkflowStatusChange(uint8,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoterRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WorkflowStatusChange"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProposalRegisteredEventObject {
  proposalId: BigNumber;
}
export type ProposalRegisteredEvent = TypedEvent<
  [BigNumber],
  ProposalRegisteredEventObject
>;

export type ProposalRegisteredEventFilter =
  TypedEventFilter<ProposalRegisteredEvent>;

export interface VotedEventObject {
  voter: string;
  proposalId: BigNumber;
}
export type VotedEvent = TypedEvent<[string, BigNumber], VotedEventObject>;

export type VotedEventFilter = TypedEventFilter<VotedEvent>;

export interface VoterRegisteredEventObject {
  voterAddress: string;
}
export type VoterRegisteredEvent = TypedEvent<
  [string],
  VoterRegisteredEventObject
>;

export type VoterRegisteredEventFilter = TypedEventFilter<VoterRegisteredEvent>;

export interface WorkflowStatusChangeEventObject {
  previousStatus: number;
  newStatus: number;
}
export type WorkflowStatusChangeEvent = TypedEvent<
  [number, number],
  WorkflowStatusChangeEventObject
>;

export type WorkflowStatusChangeEventFilter =
  TypedEventFilter<WorkflowStatusChangeEvent>;

export interface Voting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VotingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addProposal(
      _desc: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addVoter(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endProposalsRegistering(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endVotingSession(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getOneProposal(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Voting.ProposalStructOutput]>;

    getVoter(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Voting.VoterStructOutput]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVote(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startProposalsRegistering(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startVotingSession(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tallyVotes(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    winningProposalID(overrides?: CallOverrides): Promise<[BigNumber]>;

    workflowStatus(overrides?: CallOverrides): Promise<[number]>;
  };

  addProposal(
    _desc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addVoter(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endProposalsRegistering(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endVotingSession(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getOneProposal(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Voting.ProposalStructOutput>;

  getVoter(
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Voting.VoterStructOutput>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVote(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startProposalsRegistering(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startVotingSession(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tallyVotes(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  winningProposalID(overrides?: CallOverrides): Promise<BigNumber>;

  workflowStatus(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    addProposal(
      _desc: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addVoter(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    endProposalsRegistering(overrides?: CallOverrides): Promise<void>;

    endVotingSession(overrides?: CallOverrides): Promise<void>;

    getOneProposal(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Voting.ProposalStructOutput>;

    getVoter(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Voting.VoterStructOutput>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setVote(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startProposalsRegistering(overrides?: CallOverrides): Promise<void>;

    startVotingSession(overrides?: CallOverrides): Promise<void>;

    tallyVotes(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    winningProposalID(overrides?: CallOverrides): Promise<BigNumber>;

    workflowStatus(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "ProposalRegistered(uint256)"(
      proposalId?: null
    ): ProposalRegisteredEventFilter;
    ProposalRegistered(proposalId?: null): ProposalRegisteredEventFilter;

    "Voted(address,uint256)"(voter?: null, proposalId?: null): VotedEventFilter;
    Voted(voter?: null, proposalId?: null): VotedEventFilter;

    "VoterRegistered(address)"(voterAddress?: null): VoterRegisteredEventFilter;
    VoterRegistered(voterAddress?: null): VoterRegisteredEventFilter;

    "WorkflowStatusChange(uint8,uint8)"(
      previousStatus?: null,
      newStatus?: null
    ): WorkflowStatusChangeEventFilter;
    WorkflowStatusChange(
      previousStatus?: null,
      newStatus?: null
    ): WorkflowStatusChangeEventFilter;
  };

  estimateGas: {
    addProposal(
      _desc: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addVoter(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endProposalsRegistering(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endVotingSession(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getOneProposal(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVoter(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVote(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startProposalsRegistering(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startVotingSession(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tallyVotes(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    winningProposalID(overrides?: CallOverrides): Promise<BigNumber>;

    workflowStatus(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addProposal(
      _desc: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addVoter(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endProposalsRegistering(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endVotingSession(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getOneProposal(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVoter(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVote(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startProposalsRegistering(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startVotingSession(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tallyVotes(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    winningProposalID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    workflowStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}