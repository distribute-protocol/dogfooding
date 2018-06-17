const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// The GraphQL schema in string form
const typeDefs = `
  type Avatar {
    credential: Credential!
    uri: String!
  }

  type Credential {
    address: String!
    avatar: Avatar!
    context: String!
    id: ID!
    name: String!
    networkAddress: String!
    publicEncKey: String!
    publicKey: String!
    pushToken: String!
    type: String!
    user: User!
  }

  type Network {
    currentPrice: Int!
    ethPrice: Int!
    totalReputation: Int!
    totalTokens: Int!
    weiBal: Int!
  }

  type Project {
    activeStatePeriod: Int!
    address: String!
    id: ID!
    ipfsHash: String!
    nextDeadline: String!
    passThreshold: Int!
    proposer: User!
    proposerType: Int!
    reputationBalance: Int!
    reputationCost: Int!
    stakedStatePeriod: Int!
    stakes: [Stake!]
    state: Int!
    tasks: [Task!]
    turnoverTime: Int!
    validateStatePeriod: Int!
    voteCommitPeriod: Int!
    voteRevealPeriod: Int!
    weiBal: Int!,
    weiCost: Int!,
  }

  type Reputation {
    user: User!
    amount: Int!
  }

  type Stake {
    amount: Int!
    id: ID!
    project: Project!
    type: String!
    user: User!
  }

  type Task {
    claimed: Boolean!
    claimedAt: String!
    claimer: User!
    complete: Boolean!
    description: String!
    id: ID!
    project: Project!
    validations: [Validation!]
    validationRewardClaimable: Boolean!
    votes: [Vote!]
    weighting: Int!
    workerRewardClaimable: Boolean!
  }

  type Token {
    user: User!
    amount: Int!
    ether: Int!
  }

  type User {
    id: ID!
    account: String!
    credentials: Credential!
    name: String!
    projects: [Project!]
    reputationBalance: Int!
    repuationChanges: [Reputation!]
    stakes: [Stake!]
    tasks: [Task!]
    tokenBalance: Int!
    tokenChanges: [Token!]
    validations: [Validation!]
    votes: [Vote!]
  }

  type Validation {
    id: ID!
    amount: Int!
    task: Task!
    user: User!
    state: Boolean!
  }

  type Vote {
    id: ID!
    amount: Int!
    commit: Boolean!
    reveal: Boolean!
    pulled: Boolean!
    state: Boolean!
    task: Task!
    type: String!
    user: User!
  }

  type Query {
    network: Network
    user(account: String): User
    allUsers: [User]
    token(account: String): [Token]
    allTokens: [Token]
    reputation(account: String): [Reputation]
    allReputations: [Reputation]
    project(address: String): Project
    allProjects: [Project]
    userStakes(account: String): [Stake]
    projectStakes(address: String): [Stake]
    task(address: String): Task
    allTasks: [Task]
    userTasks(account: String): [Task]
    projectTasks(address: String): [Task]
    userValidations(account: String): [Validation]
    taskValidations(address: String): [Validation]
    userVotes(account: String): [Vote]
    taskVotes(address: String): [Task]
  }
`

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
