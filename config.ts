export default {
    serverHost: require('os').hostname(),
    gameServerPort: 16100,
    regionName: "overseas01",
    mongodbUrl: "mongodb://localhost:27017"
} as configInterface

interface configInterface{
    serverHost: string
    gameServerPort: number
    regionName: string
    mongodbUrl: string
}
